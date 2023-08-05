import styled, { css } from "styled-components";

const StyledApp = styled.div`
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: "omyu_pretty";
`;

export { StyledApp };
