import React from "react";
import { storiesName } from "helpers/storiesName";
import DetailsSection from "./DetailsSection";

export default {
  title: `${storiesName.organisms}DetailsSection`,
  component: DetailsSection,
};

const Template = (args) => <DetailsSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  details: {
    headline: "Headline",
    parameters: [
      {
        text: "text",
        src: "",
        infoText: "infoText",
      },
    ],
  },
};
