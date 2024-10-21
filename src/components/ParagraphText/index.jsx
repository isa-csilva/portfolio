import styled from "styled-components"

const StyledText = styled.div`
        color: #B4A5A5;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.8rem;
        margin-top: 0;
        margin-bottom: 0.6rem;
        text-align: ${props => props.$posicao ? 'center' : 'justify'};

        span {
            color: #bd6a93;
        }
`

const Text = ({ children, posicao }) => {
    return (
        <StyledText $posicao={posicao}>
            {children}
        </StyledText>
    )
}

export default Text;