import styled from "styled-components"


export const StyledSkill = styled.div`
display: flex;
align-items: center;
width: auto;
height: 30px;
gap: 5px;
padding: 0 12px;
border-radius: 20px;
background-color: transparent;

border: 1px solid ${({ borderColor }) => borderColor || "#000"};

& > img {
    width: 18px;
    height: 18px;
}




@media (max-width: 768px) {
        font-size: 0.8rem;
    }
`