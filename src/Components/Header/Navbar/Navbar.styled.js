import { Link } from "react-router-dom"
import styled from "styled-components"
import {FiMenu} from "react-icons/fi"

export const Nav = styled.nav`
position: sticky;
width: 100%;
height: 72px;
display: flex;
align-items: center;
justify-content: space-between;
justify-self: center;
top: 5px;
padding: 0 20px;
margin: 0 auto;
margin-bottom: 20px;
box-sizing: border-box ;
background-color: #ffff;
box-shadow: 0px 2px 4px rgba(81, 130, 167, 0.25);
border-radius: 10px;
z-index: 1;

&:hover {
box-shadow: 0px 2px 10px 2px RGBA(81, 130, 167, 0.25);
}
`


export const List = styled.ul`
display: inline-flex;
list-style: none;
gap: 14px;



@media (max-width: 768px) {
        display: none ;
    }
`
export const ListItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    font-family: 'poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 12px 10px;
    color: #000;

    &:hover{
        color: #fff;  
        background: rgba(63, 132, 171, 1);
        border-radius: 8px;
    }

`

export const HambugerMenu = styled(FiMenu)`

display: none;
@media (max-width: 768px) {
    display: block ;
}
`