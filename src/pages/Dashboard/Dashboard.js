import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StyledDashboard } from "./Dashboard.styles";
import { dataContext } from "providers/DataProvider";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PlantSection from "components/organisms/PlantSection/PlantSection";
import PotSection from "components/organisms/PotSection/PotSection";
import UserActivitiesSection from "components/organisms/UserActivitiesSection/UserActivitiesSection";
const Dashboard = () => {
  const {
    Dashboard: { headings },
  } = useContext(dataContext);

  return (
    <MainTemplate inBackground={true}>
      <SearchBar isSearchBar={true} />
      <PotSection headline={headings[0]} />
      <PlantSection headline={headings[1]} />
      <UserActivitiesSection headline={headings[2]} />
    </MainTemplate>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
