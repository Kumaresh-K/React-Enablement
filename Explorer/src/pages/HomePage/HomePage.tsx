import ContactUs from "../../components/ContactUs/ContactUs";
import DestinationList from "../../components/DestinationList/DestinationList";
import Promo from "../../components/Promo/Promo";
import {
  DESTINATION_HEADER,
  DESTINATION_CATCH_PHRASE,
} from "../../constants/index.tsx";
import destinationDetails from "../../assets/data/placeDetails.json";

/**
 * Represents a Home Page component.
 *
 * @component
 * @returns {React.ReactElement} A Home Page element.
 */

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Promo />
      <DestinationList
        header={DESTINATION_HEADER}
        catchPhase={DESTINATION_CATCH_PHRASE}
        destinations={destinationDetails}
      />
      <ContactUs />
    </>
  );
};

export default HomePage;
