import logo from "../../Assets/Logo.svg";
import { StyledLink } from "../index";
import { StyledLogo } from "./Logo.styled";



export function Logo() {

    return (
        <StyledLink to="/" color="rgba(81, 130, 167, 1)">
            <StyledLogo>
                <img src={logo} alt="Jhon logo" />
                <p>Jhon Jairo Garces Montes</p>
            </StyledLogo>
        </StyledLink>
    )
}
