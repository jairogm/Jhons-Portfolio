import styled from "styled-components"


export const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;

width: 100%;
max-width: 100%;
height: auto;
margin: 30px auto;
padding: 0px;

@media (max-width: 768px) {
    flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const FooterList = styled.ul`
list-style: none;

& > li {
    color: #c4c4c4;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

`

export const FooterLinks = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
place-content: end;
width: 100%;

gap: 10px;
`

export const Anchor = styled.a`

color: #c5c5c5;
text-decoration: none;

  
`