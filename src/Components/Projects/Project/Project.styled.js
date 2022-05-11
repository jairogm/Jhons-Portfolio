import styled from "styled-components"

export const StyledProject = styled.div`

width: 100%;
height: auto;
margin: 0 auto; 
padding: 20px;
border: 1px solid #c4c4c4;
border-radius:8px;
box-sizing: border-box;


&:hover{
box-shadow: 0px 2px 10px 2px RGBA(81, 130, 167, 0.25);
}
`

export const ProjectLink = styled.a`
color: #3F84AB;
cursor: pointer;
text-decoration: none;
font-size: 1.1rem;
font-weight: bold;


&:hover{
    text-decoration: underline;
}

`
