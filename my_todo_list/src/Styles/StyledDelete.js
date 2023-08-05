import styled, { css } from "styled-components";

const StyledDelete = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  margin-top: 5px;

  color: #dee9f7;

  &:hover {
    color: #ff4a56;
  }

  ${(props) =>
    props.check &&
    css`
      color: #dee9f7;
    `};
`;

export { StyledDelete };
