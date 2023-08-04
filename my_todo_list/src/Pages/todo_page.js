import { useState } from "react";
import { ItemList } from "../Components/ItemList_Component";
import { ItemInput } from "../Components/ItemInput_Component";

const Todo = () => {
  const [topics, setTopics] = useState([
    { id: 1, content: "test1", check: false },
    { id: 2, content: "test2", check: true },
    { id: 3, content: "test3", check: false },
  ]);

  const changeCheck = (id) => {
    const newTopics = [];
    for (let i = 0; i < topics.length; i++) {
      let temptopic = topics[i];
      if (temptopic.id == id) {
        temptopic.check = !temptopic.check;
      }
      newTopics.push(temptopic);
    }
    setTopics(newTopics);
  };

  const updateTodo = (content) => {};

  return (
    <>
      <ItemInput />
      <ItemList topics={topics} changeCheck={changeCheck} />
    </>
  );
};

export { Todo };
