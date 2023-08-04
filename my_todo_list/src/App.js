import { Todo } from "./Pages/todo_page";
import { Title } from "./Components/Title_Component";
import { StyledApp } from "./Styles/StyledApp";

function App() {
  return (
    <StyledApp className="App">
      <Title />
      <Todo />
    </StyledApp>
  );
}

export default App;
