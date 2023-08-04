import styled, { css } from "styled-components";

const StyledDelete = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  margin-top: 5px;

  color: black;

  &:hover {
    color: red;
  }

  ${(props) =>
    props.check &&
    css`
      color: white;
      background: black;
    `};
`;

export { StyledDelete };
