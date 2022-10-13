import React from "react";
import PropTypes from "prop-types";
import MyPlant from "components/molecules/MyPlant/MyPlant";
import { StyledPlantSection } from "./PlantSection.styles";
import Headline from "components/molecules/Headline/Headline";
const PlantSection = ({ plants, headline }) => {
  plants = [
    {
      name: "Ola",
      src: "src",
    },
    {
      name: "Ola",
      src: "src",
    },
  ];

  const plantElements = plants?.map(({ src, name }) => {
    return <MyPlant src={src} name={name} />;
  });
  return (
    <StyledPlantSection>
      <Headline text={headline} isBackground={false} />
      {plantElements}
    </StyledPlantSection>
  );
};

PlantSection.propTypes = {};

export default PlantSection;
