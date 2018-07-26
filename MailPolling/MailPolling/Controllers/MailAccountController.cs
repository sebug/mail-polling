using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailPolling.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MailPolling.Controllers
{
    [Route("api/[controller]")]
    public class MailAccountController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<MailAccount> Get()
        {
            return new List<MailAccount>()
            {
                new MailAccount {
                    MailboxAddress = "sample.com",
                    UserName = "sample",
                    Password = "sample"
                }
            };
        }
    }
}
