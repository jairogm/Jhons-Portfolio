import {Logo} from "../../index";
import { Nav, List, ListItem, HambugerMenu } from "./Navbar.styled"
export  function Navbar() {
  return (
    <Nav>
      <Logo />
      <List>
        <ListItem to="/about">About</ListItem>
        {/* <ListItem to="/blog">Blog</ListItem> */}
        <ListItem to="/projects">Projects</ListItem>
        <ListItem to="/contact">Contact</ListItem>
      </List>
      <HambugerMenu size={30}/>
    </Nav>
  )
}
