using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Extensions;
using backend.Interfaces;
using backend.Mappers;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/portfolio")]
    [Authorize]
    public class PortfolioController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IStockRepository _stockRepository;
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly IFMPServices _fmpService;

        public PortfolioController(UserManager<AppUser> userManager, IStockRepository stockRepository, IPortfolioRepository portfolioRepository, IFMPServices fmpService)
        {
            _userManager = userManager;
            _stockRepository = stockRepository;
            _portfolioRepository = portfolioRepository;
            _fmpService = fmpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var userEmail = User.GetUserEmail();
            var appUser = await _userManager.FindByEmailAsync(userEmail);
            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);
            return Ok(userPortfolio.Select(stock => stock.ToStockDto()).ToList());
        }

        [HttpPost]
        public async Task<IActionResult> AddPortfolio(string symbol)
        {
            var userEmail = User.GetUserEmail();
            var appUser = await _userManager.FindByEmailAsync(userEmail);
            var stock = await _stockRepository.GetBySymbolAsync(symbol);
            if (stock == null)
            {
                stock = await _fmpService.FindStockBySymbolAsync(symbol);
                if (stock == null)
                {
                    return BadRequest("Stock does not exists");
                }
                await _stockRepository.CreateAsync(stock);
            }

            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);
            if (userPortfolio.Any(e => e.Symbol.ToLower() == symbol.ToLower())) return BadRequest("Cannot add same stock to portfolio");

            var portfolioModel = new Portfolio
            {
                StockId = stock.Id,
                AppUserId = appUser.Id
            };

            await _portfolioRepository.CreateAsync(portfolioModel);

            if (portfolioModel == null)
            {
                return StatusCode(500, "Could not create");
            }
            return Created();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string symbol)
        {
            var userEmail = User.GetUserEmail();
            var appUser = await _userManager.FindByEmailAsync(userEmail);
            var userPortfolio = await _portfolioRepository.GetUserPortfolio(appUser);
            var filterStock = userPortfolio.Where(s => s.Symbol.ToLower() == symbol.ToLower());
            if (filterStock.Any())
            {
                await _portfolioRepository.DeletePortfolioAsync(appUser, symbol);
            }
            else
            {
                return BadRequest("stock not in your portfolio");
            }
            return Ok($"{symbol} delete from your portfolio");
        }
    }
}