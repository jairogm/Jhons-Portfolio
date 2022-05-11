import styled from "styled-components"
import { BiUserCircle } from "react-icons/bi"
import { ButtonPrimaryLarge, StyledLink } from "../index"
const StyledHello = styled.div`
    width:400px;
    max-width: 100%;
    line-height: 1.5;
`


export default function Hello() {
  return (
    <StyledHello>
      <h2>Hello There!</h2>
      <p>I am Jhon Jairo Garces Montes</p>
      <p>Passionate and creative Front-End Developer based in Colombia 🇨🇴.</p>
      <StyledLink to="/about">
        <ButtonPrimaryLarge>

          <BiUserCircle size={30} />
          <span>More About me</span>

        </ButtonPrimaryLarge>
      </StyledLink>

    </StyledHello>
  )
}
