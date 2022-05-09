
import styled from "styled-components";

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > p {
        font-size: 1.2rem;
        color: rgba(81, 130, 167, 1);
    }

    &:hover {
        cursor: pointer;
    }

@media (max-width: 425px) {
    p {
        font-size:1rem;
    }
}
@media (max-width: 390px) {
    p {
        display: none;
    }
}
`