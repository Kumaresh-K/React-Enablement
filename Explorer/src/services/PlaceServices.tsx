import placeDetails from "../assets/data/placeDetails.json";
import { placeAttributes } from "../pages/HomePage/HomePagePropDefinitions";

export function getPlace(destination: string | undefined) {
  const placeInfo = placeDetails.filter((place: placeAttributes) => {
    if (place.city == destination) return place;
  });

  return placeInfo[0];
}

export function getPlaces(destinations: string[]) {
  const placesInfo = placeDetails.filter((place: placeAttributes) => {
    if (destinations.includes(place.city)) return place;
  });
  return placesInfo;
}

export function formatString(data : string) {
    var string = data.replace(/\[\d+\]/g, " ");
    string = string.replace(/\\n/g, '<br/>');
    return  string.trim();  
}
