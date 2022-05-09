import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.template};
    grid-gap: ${props => props.gap};
`