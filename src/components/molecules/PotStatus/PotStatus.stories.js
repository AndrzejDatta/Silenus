import React from "react";
import PotStatus from "./PotStatus";
import { storiesName } from "helpers/storiesName";

export default {
  title: `${storiesName.molecules}PotStatus`,
  component: PotStatus,
};
const Template = (args) => <PotStatus {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Paprotka Ola",
  state: [
    {
      src: "tear.svg",
      text: "1",
    },
    {
      src: "waterGlass.svg",
      text: "kocham cię, mam duzo wody",
    },
    {
      src: "plant.svg",
      text: "100 dni temu",
    },
    {
      src: "task_alt.svg",
      text: "zraszanie",
    },
  ],
};
//TODO:naprawic to ze nie pobiera ikonek
