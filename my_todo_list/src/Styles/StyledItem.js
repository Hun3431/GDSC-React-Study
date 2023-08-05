import styled, { css } from "styled-components";

const StyledItem = styled.div`
  width: 400px;
  height: 50px;

  margin: 10px;
  padding: 10px 15px 10px 20px;

  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;

  background: #6e8eb9;
  color: #dee9f7;

  cursor: default;

  ${(props) =>
    props.check &&
    css`
      color: #dee9f7;
      background: #9aa1ab;
    `};
`;

export { StyledItem };
