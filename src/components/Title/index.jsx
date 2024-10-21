import styled from "styled-components"

const StyledTitle = styled.h2`
        color: #bd6a93;
        font-size: 2rem;
        margin: 0 0 0.5rem 0;
`

const Title = ({ children}) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;