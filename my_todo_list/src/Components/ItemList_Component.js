import { Item } from "./Item_Component";
import { StyledList } from "../Styles/StyledList";

const ItemList = (props) => {
  const lis = [];
  for (let i = 0; i < props.contents.length; i++) {
    let content = props.contents[i];
    lis.push(
      <li key={content.id}>
        <Item
          content={content}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
        />
      </li>
    );
  }
  return (
    <nav>
      <StyledList>{lis}</StyledList>
    </nav>
  );
};

export { ItemList };
