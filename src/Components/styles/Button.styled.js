import styled from "styled-components"

export const ButtonPrimary = styled.button`
    padding: 5px 20px;
    background-color: #3f84AB;
    border: none;
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    cursor: pointer;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
        transform: scale(0.98);
    }


    @media(max-width: 430px){
         span {
            display: none;
        }
       }
`
export const ButtonSecondary = styled(ButtonPrimary)`
    background-color: #fff;
    border: 1px solid #c4c4c4;
    color: #000;
`
export const ButtonPrimaryLarge = styled(ButtonPrimary)`
    padding: 15px;
    font-size: 19px;


    @media(max-width: 430px){
         span {
            display: block;
        }
       }
`
export const ButtonSecondaryLarge = styled(ButtonPrimary)`
    padding: 15px;
    font-size: 19px;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    color: #000;
`