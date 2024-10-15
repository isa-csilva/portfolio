import styled from "styled-components"

const StyledText = styled.div`
        color: #B4A5A5;
        font-size: 20px;
        font-weight: 300;
        line-height: 30px;
        margin-top: 0;
        margin-bottom: 10px;
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