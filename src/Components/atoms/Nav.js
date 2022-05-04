import styled from "styled-components"


export const StyledNav = styled.nav`
  position: sticky;
  width: 1000px;
  max-width: 100%;
  height: 72px;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 40px;
  top: 5px;
  /* box-sizing: border-box; */
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0px 2px 4px rgba(81, 130, 167, 0.25);
  border-radius: 8px;
  z-index: 1;;

&:hover {
  box-shadow: 0px 2px 10px 2px RGBA(81, 130, 167, 0.25);
}
  `