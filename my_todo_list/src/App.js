import { StyledApp } from "./Styles/StyledApp";
import { Header } from "./layout/Headers_layout";
import { Body } from "./layout/Body_layout";
import { Footer } from "./layout/Footer_layout";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Body />
      <Footer />
    </StyledApp>
  );
}

export default App;
