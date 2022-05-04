import styled from "styled-components"
import { Link } from "react-router-dom"

export const ListItem = styled(Link)`
    padding: 8px 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.2px;
    text-decoration: none;
    line-height: 29px;
    cursor: pointer;
    color: #000;
    &:hover{
        border-radius: 8px;

        background: rgba(63, 132, 171, 1);
        color: #fff;
        transform: scale(1.05);
    }
`
