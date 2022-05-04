import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;
  ul {
    list-style-type: none;
  }

  ul li {
    cursor: pointer;
    color: #c4c4c4;
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  
  li:hover{
    
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
