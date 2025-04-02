using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            return _religionContext.Locations
                .Include(l => l.Religion)
                .ToList();
        }

        [HttpGet("AllUsers")]
        public IEnumerable<User> Getusers()
        {
            return _religionContext.Users.ToList();
        }

        [HttpGet("AllStudyGuides/{guideId}")]
        public ActionResult<StudyGuide> GetStudyGuides(int guideId)
        {
            var studyGuide = _religionContext.StudyGuides
                .Include(sg => sg.Religion)
                .Include(sg => sg.User)
                .FirstOrDefault(sg => sg.GuideId == guideId);
            if (studyGuide == null)
            {
                return NotFound();
            }

            return Ok(studyGuide);


        }

        [HttpGet("AllDiscussions")]
        public IEnumerable<Discussion> GetDiscussions()
        {
            return _religionContext.Discussions.ToList();
        }

    }
}
