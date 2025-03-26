export interface Religion {
  religionID: number;
  religionName: string;
  category: string;
  overview: string;
}

export interface Location {
  locationId: number;
  religionId: number;
  locationName: string;
  religion: Religion; // Religion object
}
