import { StyledApp } from "./Styles/StyledApp";
import { Header } from "./layout/Headers_layout";
import { Body } from "./layout/Body_layout";
import { Footer } from "./layout/Footer_layout";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp className="App">
        <Header />
        <Body />
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
