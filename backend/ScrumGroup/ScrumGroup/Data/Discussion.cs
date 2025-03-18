using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumGroup.Data;

public class Discussion
{
    [Key]
    public int DiscussionId { get; set; }
    [ForeignKey("UserId")]
    public int? UserId { get; set; }
    public User User { get; set; }
    [Required]
    public DateTime TimePosted { get; set; }
    [Required]
    public string? Response { get; set; }
}