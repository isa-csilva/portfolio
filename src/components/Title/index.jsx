import styled from "styled-components"

const StyledTitle = styled.h2`
        color: #bd6a93;
        font-size: 30px;
`

const Title = ({ children }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;