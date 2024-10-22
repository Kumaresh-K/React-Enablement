import styles from "./DestinationList.module.scss";
import { destinationListProps } from "../../pages/HomePage/HomePagePropDefinitions";
import React from "react";
import HeaderText from "../HeaderText/HeaderText.tsx";
import DestinationCard from "../DestinationCard/DestinationCard.tsx";

/**
 * Represents all destination with details.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.header - The header name.
 * @param {string} props.catchPhase - The sub header or catch phase.
 * @param {string} props.destination - The name of the city.
 * @param {React.CSSProperties} props.inlineStyle - Inline style for the component.
 * @returns {React.ReactElement} the all destination element.
 */

const DestinationList = ({
  header,
  catchPhase,
  destinations,
  inlineStyle
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
    <section className={styles.destinations} style={inlineStyle}>
      <HeaderText title={header} content={catchPhase} />
      <div className={styles.destinationCardsContainer}>{destinationCards}</div>
    </section>
  );
};

export default DestinationList;
