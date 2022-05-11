import styled from "styled-components"

export const StyledSocial = styled.div`
width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;



    & > ul {
        display: inline-flex;
        list-style: none;
        gap: 10px;

    }
    
    `


export const StyledSocialIcon = styled.a`
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover {

   color: rgba(63,132,171,1);

    }
`