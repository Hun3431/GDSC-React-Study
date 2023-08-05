import { StyledDelete } from "../Styles/StyledDelete";
import { FaRegCircleXmark } from "react-icons/fa6";

const ItemDelete = (props) => {
  return (
    <div>
      <StyledDelete
        type="button"
        check={props.check}
        onClick={(event) => {
          event.stopPropagation();
          props.deleteTodo(props.id);
        }}
      >
        <FaRegCircleXmark className="delete" size={30} />
      </StyledDelete>
    </div>
  );
};

export { ItemDelete };
