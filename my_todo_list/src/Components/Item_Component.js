import { StyledItem } from "../Styles/StyledItem";
import { ItemDelete } from "./ItemDelete_Component";

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

export { Item };
