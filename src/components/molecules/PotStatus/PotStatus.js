import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import { StyledPotStatus, StyledPotStatusInfo } from "./PotStatus.styles";
import { dataContext } from "providers/DataProvider";
import Icon from "components/atoms/icon/icon.component";
import Img from "components/atoms/Img/Img";
const PotStatus = (props) => {
  const {
    potIcons,
    Dashboard: { plants },
  } = useContext(dataContext);

  const elements = plants.state?.map(({ src, text }) => {
    return (
      <StyledPotStatus>
        <Img size="medium" src={"1"} />
        <StyledPotStatusInfo>
          <Icon icon={potIcons[src]} size="tiny" color="black" />
          <UserAccountText
            text={text}
            isLogout={false}
            isHeadling={false}
            isOption={true}
          />
        </StyledPotStatusInfo>
      </StyledPotStatus>
    );
  });

  return elements;
};

PotStatus.propTypes = {};

export default PotStatus;
