import styled from "styled-components"

export const StyledProject = styled.div`
width: 100%;
height: auto;
margin: 0 auto; 
box-sizing: border-box;

border: 10px solid;
border-image-slice: 1;
border-width: 5px;
border-image-source: ${props => props.borderColor};
padding: 4px;
transition: all 0.2s ease-in-out;

&:hover{
box-shadow: 0px 2px 10px 2px RGBA(81, 130, 167, 0.25);
transform: scale(1.01);
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
