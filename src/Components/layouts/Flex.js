import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || "row"};
    flex-wrap: ${({ wrap }) => wrap || "wrap"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    gap: ${({ gap }) => gap || "0px"};
    margin: ${({ margin }) => margin || "0px"};
    padding: ${({ padding }) => padding || "0px"};
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: ${({ Mobiledirection }) => Mobiledirection || "row"};
    }
`