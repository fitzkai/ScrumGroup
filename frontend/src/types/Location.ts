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
  religion: Religion | null; // Religion object
  // the "null" handles cases where the religion might be null (shouldn't actually happen)
}
