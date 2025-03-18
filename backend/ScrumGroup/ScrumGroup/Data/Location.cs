using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScrumGroup.Data;

public class Location
{
    [Key]
    public int LocationId { get; set; }
    [ForeignKey("ReligionId")]
    public int ReligionId { get; set; }
    public string LocationName { get; set; }
    public Religion? Religion { get; set; }
}