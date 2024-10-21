import styled from "styled-components";

const StyledNavbarLinks = styled.ul`
    margin: 0;
    padding: 2rem 0 0 0;
    list-style-type: none;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    a {
        color: #bd6a93;
        text-decoration: none;
        padding: 0.5rem;
    }

    a:hover {
        transition: 0.5s;
        border-bottom: 1px solid;
        color: #3C415C;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`

const NavbarLinks = () => {
   return (
        <StyledNavbarLinks onClick={(e) => {
            e.preventDefault();
            const target = e.target;
            const id = target.getAttribute('href')?.replace('#', '');
            const element = document.getElementById(id);
            element?.scrollIntoView({
                behavior: 'smooth'
                })
            }}>
                <li>
                    <a href="#abtMe">Sobre mim</a>
                </li>
                <li>
                    <a href="#hardskills">Hardskills e Tecnologias</a>
                </li>
                <li>
                    <a href="#footer">Contato</a>
                </li>
        </StyledNavbarLinks>
   )
}
export default NavbarLinks;