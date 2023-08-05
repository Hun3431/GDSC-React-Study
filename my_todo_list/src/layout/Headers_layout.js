import { Title } from "../Components/Title_Component";
import { Menu } from "../Components/Menu_Component";
import { User } from "../Components/User_Component";
import { StyledHeader } from "../Styles/StyledHeader";

const Header = () => {
    return (
        <StyledHeader>
            <Menu />
            <Title />
            <User />
        </StyledHeader>
    );
};

export { Header };