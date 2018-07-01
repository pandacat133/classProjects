export interface Courses {
  id: string;
  includes: string;
  courseId: number;
  statusId: number;
  status: string;
  courseTypeId: string;
  courseType: string;
  measurementTypeId: number;
  mediaId: number;
  holeCount: number;
  lat: number;
  lng: number;
  popularityOneWeek: number;
  popularityThreeMonth: number;
  distanceFromMeKilometers: number;
  distanceFromMeMiles: number;
  localRankOneWeek: number;
  localRankThreeMonth: number;
  globalRankOneWeek: number;
  globalRankThreeWeek: number;
  localMaxRank: number;
  globalMaxRank: number;
  name: string;
  addr1: string;
  addr2: string;
  city: string;
  cityOrProvince: string;
  country: string;
  zipCode: string;
  phone: string;
  website: string;
  thumbnail: string;
  holes: string[];
}
