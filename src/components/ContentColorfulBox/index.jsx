import styled from "styled-components";

const StyledContentBox = styled.div`
    width: 100%;
    height: fit-content;
    background: rgb(189,106,147);
    background: linear-gradient(180deg, rgba(189,106,147,0.27503501400560226) 0%, rgba(21,21,21,1) 20%, rgba(60,65,92,0.529936974789916) 98%);
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`

const ContentColorfulBox = ({ children }) => {
    return (
        <StyledContentBox>
            {children}
        </StyledContentBox>
    )
}

export default ContentColorfulBox;