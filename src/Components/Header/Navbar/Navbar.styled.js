import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
width: 100%;
height: 72px;
display: flex;
align-items: center;
justify-content: space-between;
justify-self: center;
padding: 0;
margin: 0 auto;
margin-bottom: 30px;
box-sizing: border-box ;
border-radius: 10px;
z-index: 1;


`


export const List = styled.ul`
display: flex;
align-items: center;
list-style: none;
gap: 14px;

`
export const ListItem = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    font-family: 'poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 5px 10px;
    color: ${props => props.color};
    &:hover{ 
        background: ${props => props.bg};
        border-radius: 8px;
    }

    &.active{
        color: ${props => props.activeColor};
        font-weight: 700;
    }

`
