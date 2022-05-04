
import { List, ListItem } from "../../styles/Nav.styled"
import moon from "../../../Assets/moon-emoji.svg"



export default function Navlinks() {
    return (
        <>
            <List>
                <ListItem>About</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Projects</ListItem>
                <ListItem>Contact</ListItem>
                <img src={moon} alt="Moon illustration" />
            </List>
        </>
    )
}
