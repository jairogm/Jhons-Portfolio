import styled from "styled-components";
import { ListItem } from "../atoms/ListItem";

const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
`
export default function Navlinks() {
    return (
        <List>
            <ListItem to="/About">About</ListItem>
            <ListItem to="/Blog">Blog</ListItem>
            <ListItem to="/Projects">Projects</ListItem>
            <ListItem to="/Contact">Contact</ListItem>
        </List>
    )
}
