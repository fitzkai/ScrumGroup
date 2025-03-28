using Microsoft.EntityFrameworkCore;
using ScrumGroup.Data;

namespace ScrumGroup.Data
{
    public class ReligionDbContext : DbContext
    {
        public ReligionDbContext(DbContextOptions<ReligionDbContext> options) : base(options)
        {
        }

        public DbSet<Religion> Religions { get; set; }
        public DbSet<Discussion> Discussions { get; set; }
        public DbSet<StudyGuide> StudyGuides { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Location> Locations { get; set; }

    }
}
