import { IconButton, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi"
import { Nav, List, ListItem } from "./Navbar.styled"
export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const NavLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact",
      path: "/contact"
    }
    // {
    //   name: "Blog",
    //   path: "/blog"
    // },
    // {
    //   name: "Projects",
    //   path: "/projects"
    // }
  ]
  return (
    <Nav>
      <List>
        {
          NavLinks.map(({ name, path }) => (
            <ListItem
              key={name}
              to={path}
              bg={colorMode === "light" ? "#eaeaea" : "#333"}
              color={colorMode === "light" ? "#444" : "#888"}
              activeColor={colorMode === "light" ? "#444" : "#fff"}
            >
              {name}
            </ListItem>
          ))
        }
      </List>

      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <BiMoon /> : <BiSun />}
        size="md"
        borderRadius="xl"
        _hover={{
          border: "2px",
          borderColor: "gray.300"
        }}

        onClick={toggleColorMode}
      />
    </Nav>
  )
}
