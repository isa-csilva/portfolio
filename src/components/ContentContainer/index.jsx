import styled from "styled-components";

const StyledContentContainer = styled.section`
    width: 1200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 75px;
`

const ContentContainer = ({ children }) => {
    return (
        <StyledContentContainer>
            {children}
        </StyledContentContainer>
    )
}

export default ContentContainer;