import styled from 'styled-components';

export const StyledToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const StyledSpan = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }
`;
