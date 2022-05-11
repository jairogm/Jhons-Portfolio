import styled from "styled-components"


export const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;

width: 100%;
max-width: 100%;
height: auto;
margin: 20px auto;
padding: 10px;

@media (max-width: 768px) {
    flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const FooterList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: 1fr 1fr;
flex-direction:column;

gap: 10px;
& > li {
    color: #c4c4c4;
    margin: 5px 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

`

export const Anchor = styled.a`

color: #c5c5c5;
text-decoration: none;

  
`