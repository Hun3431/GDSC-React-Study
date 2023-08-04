import { Item } from "./Item_Component";
import { StyledList } from "../Styles/StyledList";

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
      <StyledList>{lis}</StyledList>
    </nav>
  );
};

export { ItemList };
