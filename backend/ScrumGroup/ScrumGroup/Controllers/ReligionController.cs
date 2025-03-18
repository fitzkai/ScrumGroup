using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ScrumGroup.Data;

namespace ScrumGroup.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReligionController : ControllerBase
    {
        private ReligionDbContext _religionContext;

        public ReligionController(ReligionDbContext temp)
        {
            _religionContext = temp;
        }

        [HttpGet("AllReligions")]
        public IEnumerable<Religion> GetReligions()
        {
            return _religionContext.Religions.ToList();
        }

        [HttpGet("AllLocations")]
        public IEnumerable<Location> GetLocations()
        {
            return _religionContext.Locations.ToList();
        }

        [HttpGet("AllUsers")]
        public IEnumerable<User> Getusers()
        {
            return _religionContext.Users.ToList();
        }

        [HttpGet("AllStudyGuides")]
        public IEnumerable<StudyGuide> GetStudyGuides()
        {
            return _religionContext.StudyGuides.ToList();
        }

        [HttpGet("AllDiscussions")]
        public IEnumerable<Discussion> GetDiscussions()
        {
            return _religionContext.Discussions.ToList();
        }

    }
}
