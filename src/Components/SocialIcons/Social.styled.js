import styled from "styled-components"

export const StyledSocial = styled.div`
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
    
    cursor: pointer;

    &:hover {

   color: rgba(63,132,171,1);

    }
`