import { useState, useEffect } from "react";
import { ItemList } from "../Components/ItemList_Component";
import { ItemInput } from "../Components/ItemInput_Component";

const Todo = () => {
  // 1. 로컬스토리지로 데이터 유지할 예정
  // 2. 이후 Firebase로 사용자 데이터 저장 예정
  const [contents, setContents] = useState([
    { id: 1, content: "test1", check: false },
    { id: 2, content: "test2", check: true },
    { id: 3, content: "test3", check: false },
  ]);
  const [nextId, setNextId] = useState(4);

  // useEffect(() => {
  //   console.log("Contents updated:", contents);
  // }, [contents]);

  const changeCheck = (id) => {
    const newContents = [];
    for (let i = 0; i < contents.length; i++) {
      let tempContent = contents[i];
      if (tempContent.id == id) {
        tempContent.check = !tempContent.check;
      }
      newContents.push(tempContent);
    }
    setContents(newContents);
  };

  const createTodo = (content) => {
    console.log(content);
    const newContent = { id: nextId, content, check: false };
    const tempContent = [...contents];
    tempContent.push(newContent);
    setContents(tempContent);
    setNextId(nextId + 1);
  };

  const deleteTodo = (id) => {
    setContents((prevContents) => {
      const newContents = [];

      for (let i = 0; i < prevContents.length; i++) {
        const tempContent = prevContents[i];

        if (tempContent.id === id) {
          continue;
        }
        newContents.push(tempContent);
      }
      return newContents;
    });
  };

  return (
    <>
      <ItemInput createTodo={createTodo} />
      <ItemList
        contents={contents}
        changeCheck={changeCheck}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export { Todo };
