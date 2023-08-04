import styled, { css } from "styled-components";

const StyledItem = styled.div`
  width: 400px;
  height: 50px;

  margin: 10px;
  padding: 10px 15px 10px 20px;

  border: 3px solid darkgray;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;

  background: lightgray;
  color: black;

  cursor: default;

  ${(props) =>
    props.check &&
    css`
      color: white;
      background: black;
    `};
`;

export { StyledItem };
