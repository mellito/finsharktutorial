using backend.Models;

namespace backend.Interfaces
{
    public interface IFMPServices
    {
        Task<Stock> FindStockBySymbolAsync(string symbol);
    }
}