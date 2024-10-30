import styled from "styled-components";

const StyledContentContainer = styled.section`
    width: 85%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    margin: 3rem 0;

    @media (max-width: 600px) {
        h2 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
        }
    }
`

const ContentContainer = ({ children, idName }) => {
    return (
        <StyledContentContainer id={idName} >
            {children}
        </StyledContentContainer>
    )
}

export default ContentContainer;