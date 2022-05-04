import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || " "};
    gap: 10px;
    flex-direction: ${({ layout }) => layout || 'row'};
    margin: ${({ margin }) => margin || "0"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};

    @media(max-width: ${({ theme }) => theme.mobile}){
        flex-direction: ${({ layout }) => layout || 'column'};
  }
`