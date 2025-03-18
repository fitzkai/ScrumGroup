using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumGroup.Data;

public class StudyGuide
{
    [Key]
    public int GuideId { get; set; }
    [ForeignKey("ReligionId")]
    public int ReligionId { get; set; }
    public Religion Religion { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    public User? User { get; set; }
    public string? Response1 { get; set; }
    public string? Response2 { get; set; }
    public string? Response3 { get; set; }
    public string? Response4 { get; set; }
    public string? Response5 { get; set; }
}