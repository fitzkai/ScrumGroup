using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumGroup.Data;

public class User
{
    [Key]
    [Column(Order = 0)]
    public int UserId { get; set; }

    [Key]
    [Column(Order = 1)]
    public int ReligionId { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    [ForeignKey("ReligionKey")]
    public Religion? Religion { get; set; }
}