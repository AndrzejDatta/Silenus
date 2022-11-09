import React from "react";
import { storiesName } from "helpers/storiesName";
import DetailParameters from "./DetailParameters";

export default {
  title: `${storiesName.molecules}DetailParameters`,
  component: DetailParameters,
};

const Template = (args) => <DetailParameters {...args} />;

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
