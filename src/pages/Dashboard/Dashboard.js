import React, { Suspense, useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import PlantSection from "components/organisms/PlantSection/PlantSection";
import PotSection from "components/organisms/PotSection/PotSection";
import UserActivitiesSection from "components/organisms/UserActivitiesSection/UserActivitiesSection";
const Dashboard = () => {
  const {
    Dashboard: { headings, toPath },
  } = useContext(dataContext);

  return (
    <MainTemplate isStyledBackground={true}>
      <Suspense fallback={<div>Loading</div>}>
        <SearchBar isSearchBar={true} />
        <PotSection headline={headings[0]} path={toPath[0]} />
        <PlantSection headline={headings[1]} path={toPath[1]} />
        <UserActivitiesSection headline={headings[2]} path={toPath[2]} />
      </Suspense>
    </MainTemplate>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
