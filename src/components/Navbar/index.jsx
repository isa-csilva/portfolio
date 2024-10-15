import styled from "styled-components";

const StyledNavbar = styled.nav`

    ul {
        margin: 0;
        padding-top: 35px;
        list-style-type: none;
        font-weight: 600;
        font-size: 18px;
        display: flex;
        gap: 25px;
        justify-content: center;
    }

    a {
        color: #bd6a93;
        text-decoration: none;
        padding: 5px;
    }

    a:hover {
        transition: 0.5s;
        border-bottom: 1px solid;
        color: #3C415C;
    }
`

const Navbar = () => {
    return (
        <>
            <StyledNavbar>
                <ul>
                    <li>
                        <a href="">Sobre mim </a>
                    </li>
                    <li>
                        <a href="">Habilidades e Conhecimentos</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
                
            </StyledNavbar>
        </>
    )
}

export default Navbar;