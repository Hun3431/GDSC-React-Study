import { StyledItem } from "../Styles/StyledItem";
import { StyledInput } from "../Styles/StyledInput";

const ItemInput = (props) => {
  return (
    <StyledItem>
      <StyledInput type="text" onKeyPress={console.log("hello")} />
    </StyledItem>
  );
};

export { ItemInput };
