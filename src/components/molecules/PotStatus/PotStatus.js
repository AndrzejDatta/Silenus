import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserAccountText from "components/atoms/UserAccountText/UserAccountText";
import {
  StyledPotStatus,
  StyledPotStatusInfo,
  StyledPotStatusText,
} from "./PotStatus.styles";
import { dataContext } from "providers/DataProvider";
import Icon from "components/atoms/icon/icon.component";
import Img from "components/atoms/Img/Img";
const PotStatus = (props) => {
  const {
    potIcons,
    Dashboard: { plants },
  } = useContext(dataContext);

  console.log(plants);
  console.log(potIcons);
  const elements = plants?.map(({ state, name }) => {
    return (
      <StyledPotStatus>
        <Img size="small" src={"1"} />
        <StyledPotStatusInfo>
          <UserAccountText
            text={name}
            isLogout={false}
            isHeadling={true}
            isOption={false}
            isUser={true}
          />
          {state.map(({ src, text }) => {
            return (
              <StyledPotStatusText>
                <Icon icon={potIcons[src]} size="tiny" color="green" />
                <UserAccountText
                  text={text}
                  isLogout={false}
                  isHeadling={false}
                  isOption={true}
                />
              </StyledPotStatusText>
            );
          })}
        </StyledPotStatusInfo>
      </StyledPotStatus>
    );
  });

  console.log(elements);
  return elements;
};

PotStatus.propTypes = {};

export default PotStatus;
