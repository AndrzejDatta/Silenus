import styled from "styled-components";

export const StyledFilteredItem = styled.li`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${(props) => props.color};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: normal;
  line-height: 1.8;
`;
export const StyledFilteredItemSection = styled.p`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;
