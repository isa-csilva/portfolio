import styled from "styled-components"

const StyledGrid = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content: center;
`

const CardsGrid = ({children}) => {
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    )
}

export default CardsGrid