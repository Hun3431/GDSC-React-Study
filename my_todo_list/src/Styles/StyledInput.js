import styled, { css } from "styled-components";

const StyledInput = styled.input`
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  width: 100%;

  border: none;
  outline: none;

  background: none;

  color: white;

  font-size: 20px;
  font-family: "omyu_pretty";

  &::placeholder {
    color: white;
  }
`;

export { StyledInput };
