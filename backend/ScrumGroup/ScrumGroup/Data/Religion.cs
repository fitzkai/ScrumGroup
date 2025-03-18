using System.ComponentModel.DataAnnotations;

namespace ScrumGroup.Data;

public class Religion
{
    [Key]
    public int ReligionID { get; set; }
    [Required]
    public string ReligionName { get; set; }
    public string? Category { get; set; }
    public string? Overview { get; set; }
}