import React from 'react'
import styled from 'styled-components'
import logo from "../../../Assets/Logo.svg"

const StyledLogo = styled.div`
    display:flex;
    gap: 10px;

& > p {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 19.2px;
      line-height: 29px;
      margin-top: 21px;
      color: #3F84AB;
    }

    @media(max-width: 320px){
            p{
                display: none;
            }
     }
`
export default function Logo() {
    return (
        <StyledLogo>
            <img src={logo} alt="jhonslogo" />
            <p>Jhon Jairo Garces Montes</p>
        </StyledLogo>
    )
}
