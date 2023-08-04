import { StyledDelete } from "../Styles/StyledDelete";
import { FaRegCircleXmark } from "react-icons/fa6";

const ItemDelete = (props) => {
  return (
    <StyledDelete check={props.check}>
      <FaRegCircleXmark className="delete" size={30} />
    </StyledDelete>
  );
};

export { ItemDelete };
