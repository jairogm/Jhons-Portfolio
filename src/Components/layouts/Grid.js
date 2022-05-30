import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    place-items: ${props => props.placeItems || ""};
    grid-template-columns: ${props => props.template};
    grid-gap: ${props => props.gap};
    margin: ${props => props.margin || "0"};
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`