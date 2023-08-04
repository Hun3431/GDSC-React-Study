import styled, { css } from "styled-components";
import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

const StyledTitle = styled.h1``;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

  ${(props) =>
    props.check &&
    css`
      color: white;
      background: black;
    `};
`;

const StyledInput = styled.input`
  width: 100%;

  border: none;
  outline: none;

  background: none;

  font-size: 20px;
`;

const StyledOl = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

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

const ItemDelete = (props) => {
  return (
    <StyledDelete check={props.check}>
      <FaRegCircleXmark className="delete" size={30} />
    </StyledDelete>
  );
};

const ItemInput = (props) => {
  return (
    <StyledItem>
      <StyledInput type="text" onKeyPress={console.log("hello")} />
    </StyledItem>
  );
};

const Item = (props) => {
  return (
    <StyledItem
      id={props.topic.id}
      onClick={(event) => {
        props.changeCheck(event.target.id);
      }}
      check={props.topic.check}
    >
      <span>{props.topic.content}</span>
      <ItemDelete check={props.topic.check} />
    </StyledItem>
  );
};

const Title = (props) => {
  return <h1>Todo List</h1>;
};

const ItemList = (props) => {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    lis.push(
      <li key={topic.id}>
        <Item topic={topic} changeCheck={props.changeCheck} />
      </li>
    );
  }
  return (
    <nav>
      <StyledOl>{lis}</StyledOl>
    </nav>
  );
};

function App() {
  const [topics, setTopics] = useState([
    { id: 1, content: "test1", check: false },
    { id: 2, content: "test2", check: true },
    { id: 3, content: "test3", check: false },
  ]);

  const changeCheck = (id) => {
    const newtopics = [];
    for (let i = 0; i < topics.length; i++) {
      let temptopic = topics[i];
      if (temptopic.id == id) {
        temptopic.check = !temptopic.check;
      }
      newtopics.push(temptopic);
    }
    setTopics(newtopics);
  };

  return (
    <StyledApp className="App">
      <Title />
      <ItemInput />
      <ItemList topics={topics} changeCheck={changeCheck} />
    </StyledApp>
  );
}

export default App;
