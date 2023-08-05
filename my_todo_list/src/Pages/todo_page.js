import { useState, useEffect } from "react";
import { ItemList } from "../Components/ItemList_Component";
import { ItemInput } from "../Components/ItemInput_Component";

const Todo = () => {
  // 1. 로컬스토리지로 데이터 유지할 예정
  // 2. 이후 Firebase로 사용자 데이터 저장 예정
  const [contents, setContents] = useState("");
  const [nextId, setNextId] = useState(0);

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // 최초 실행
    if (mounted) {
      setMounted(false);

      const lastData = localStorage.getItem("todoList");
      const lastId = localStorage.getItem("nextId");

      if (lastData && lastId) {
        setContents(JSON.parse(lastData));
        setNextId(Number(lastId));
      }
    } else {
      saveTodo();
    }
  }, [contents, nextId]);

  // console.log(JSON.parse(lastData));
  // console.log(JSON.parse(lastId));

  const saveTodo = () => {
    localStorage.setItem("todoList", JSON.stringify(contents));
    localStorage.setItem("nextId", nextId);
  };

  const updateTodo = (id) => {
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
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export { Todo };
