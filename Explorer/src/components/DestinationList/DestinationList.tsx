import styles from "./DestinationList.module.scss";
import { destinationListProps } from "../../pages/HomePage/HomePagePropDefinitions";
import React from "react";
import Header from "../Header/Header";
import DestinationCard from "../DestinationCard/DestinationCard";

/**
 * Represents all destination with details.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.header - The header name.
 * @param {string} props.catchPhase - The sub header or catch phase.
 * @param {string} props.destination - The name of the city.
 * @param {string} props.className - Style for the component.
 * @returns {React.ReactElement} the all destination element.
 */

const DestinationList = ({
  header,
  catchPhase,
  destinations,
  className,
}: destinationListProps): React.ReactElement => {
  const destinationCards = destinations.map((destination, key) => {
    return (
      <DestinationCard
        catchPhrase={destination.place}
        city={destination.city}
        shortDescription={destination.shortDescription}
        key={key}
      />
    );
  });

  return (
    <section className={`${styles.destinations} ${styles[className ?? ""]}`}>
      <Header title={header} content={catchPhase} />
      <div className={styles.destinationCardsContainer}>{destinationCards}</div>
    </section>
  );
};

export default DestinationList;
