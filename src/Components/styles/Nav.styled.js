import styled from "styled-components"

export const Nav = styled.nav`
    position: sticky;
    width: 920px;
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    top: 10px;
    background-color: ${({ theme }) => theme.colors.header};
    box-shadow: 0px 2px 4px rgba(81, 130, 167, 0.25);
    border-radius: 8px;
    z-index: 1;


&:hover {
  box-shadow: 0px 2px 10px 2px RGBA(81, 130, 167, 0.25);
}



`

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;

`
export const ListItem = styled.li`
    padding: 8px 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.2px;
    line-height: 29px;
    cursor: pointer;

    &:hover{
        border-radius: 8px;

        background: rgba(63, 132, 171, 1);
        color: #fff;
        transform: scale(1.05);
    }
`



