import { useParams } from "react-router-dom";
import PlaceFocusPromo from "../../components/PlaceFocusPromo/PlaceFocusPromo";
import DestinationList from "../../components/DestinationList/DestinationList";
import { getPlace, getPlaces } from "../../services/PlaceServices";
import { SUGGESTION_HEADER } from "../../constants";
import ContactUs from "../../components/ContactUs/ContactUs";

/**
 * Represents a Destination Profile component.
 *
 * @component
 * @returns {React.ReactElement} A Destination Profile element.
 */

const DestinationProfile = (): React.ReactElement => {
  const { name } = useParams();
  const place = getPlace(name);
  const relatedPlaces = getPlaces(place.relatedPlaces);
  return (
    <>
      <PlaceFocusPromo destination={place} />
      <DestinationList
        header={SUGGESTION_HEADER}
        catchPhase={`Because you liked ${place.city}`}
        destinations={relatedPlaces}
        inlineStyle={{ marginBottom: "93px" }}
      />
      <ContactUs inlineStyle={{ padding: "5.1% 0px 4.5%" }} />
    </>
  );
};

export default DestinationProfile;
