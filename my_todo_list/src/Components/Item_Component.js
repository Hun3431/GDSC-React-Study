import { StyledItem } from "../Styles/StyledItem";
import { ItemDelete } from "./ItemDelete_Component";

const Item = (props) => {
  return (
    <StyledItem
      id={props.content.id}
      onClick={(event) => {
        event.stopPropagation();
        props.updateTodo(event.target.id);
      }}
      check={props.content.check}
    >
      {props.content.content}
      <ItemDelete
        id={props.content.id}
        check={props.content.check}
        deleteTodo={props.deleteTodo}
      />
    </StyledItem>
  );
};

export { Item };
