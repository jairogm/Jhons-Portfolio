import logo from "../../Assets/Logo.svg";

import styled from "styled-components";
import { StyledLink } from "../index";

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > p {
        font-size: 1.2rem;
        color: rgba(81, 130, 167, 1);
    }

    &:hover {
        cursor: pointer;
    }

`

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
