using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Interfaces
{
    public interface ITokenServices
    {
        string CreateToken(List<Claim> authClaims);
        bool ValidateToken(string token);
    }
}