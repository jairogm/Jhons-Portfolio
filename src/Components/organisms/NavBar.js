import { StyledNav } from "../atoms/Nav"
import Navlinks from "../molecules/Navlinks"
import Logo from "../NavBar/Logo/Logo"

export default function NavBar() {
    return (
        <>
            <StyledNav>
                <Logo></Logo>
                <Navlinks />
            </StyledNav>
        </>
    )
}
