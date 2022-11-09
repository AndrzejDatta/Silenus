import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
import PotStatus from "components/molecules/PotStatus/PotStatus";
import { StyledPotSection, StyledLink } from "./PotSection.styles";
import Headline from "components/molecules/Headline/Headline";

// import Modal from "../Modal/Modal";
// import useModal from "../Modal/useModal";
const PotSection = ({ headline, path, isPossibleToReturn }) => {
  const {
    Dashboard: { plants },
    MojeDoniczki: { returnPath, toPath },
  } = useContext(dataContext);

  // const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const elements = plants?.map(({ state, name }, index) => {
    return (
      <StyledLink to="/dashboard/potdetails" key={index}>
        <PotStatus state={state} name={name} click={() => {}} />
        {/* <Modal isOpen={isOpen} handleClose={handleCloseModal} key={index + 1}>
          <PotStatus state={state} name={name} key={index} />
        </Modal> */}
      </StyledLink>
    );
  });
  return (
    <StyledPotSection>
      <Headline
        text={headline}
        isHeadlineTextOnBackground
        icon
        path={path ? path : toPath}
        returnPath={returnPath}
        isPossibleToReturn={isPossibleToReturn} //name to change
        datId={path}
      />
      {elements}
    </StyledPotSection>
  );
};

PotSection.defaultProps = {
  headline: "Headline",
  isPossibleToReturn: false,
};

PotSection.propTypes = {
  /**text in headline */
  headline: PropTypes.string.isRequired,
  /** bool which says that this page is MyPotsPage*/
  isPossibleToReturn: PropTypes.bool,
  /** path to next page*/
  path: PropTypes.string,
};

export default PotSection;
