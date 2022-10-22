import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { dataContext } from 'providers/DataProvider';
import PotStatus from 'components/molecules/PotStatus/PotStatus';
import { StyledPotSection, StyledLink } from './PotSection.styles';
import Headline from 'components/molecules/Headline/Headline';

// import Modal from "../Modal/Modal";
// import useModal from "../Modal/useModal";
const PotSection = ({ headline = 'Headline', isDashboard, path, isReturn }) => {
  const {
    Dashboard: { plants },
    MojeDoniczki: { returnPath, toPath },
  } = useContext(dataContext);

  // const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const elements = plants?.map(({ state, name }, index) => {
    return (
      <StyledLink to="/potdetails" key={index}>
        <PotStatus
          state={state}
          name={name}
          click={() => console.log('click')}
        />
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
        isBackground
        icon
        path={path ? path : toPath}
        returnPath={returnPath}
        isReturn={isReturn} //name to change
      />
      {elements}
    </StyledPotSection>
  );
};

PotSection.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default PotSection;
