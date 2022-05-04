import styled from "styled-components";

const StyledProject = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 6px;

    &  > div {
        width: 88px;
        height: 26px;
        position: absolute;
        top: 0;
        right: 0;

        border-left: 1px solid #c4c4c4;
        border-bottom: 1px solid #c4c4c4;
        border-radius: 6px;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    @media(max-width: ${({ theme }) => theme.mobile}){
        position: relative;
        display: flex;
        align-items: ${({ align }) => align};
        flex-direction: ${({ layout }) => layout || 'column'};
  }
`

export default function Project() {
    return (
        <StyledProject>
            <div>
            </div>
        </StyledProject>
    )
}
