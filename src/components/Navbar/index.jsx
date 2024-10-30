import styled from "styled-components";
import NavbarDrawer from "./Drawer";
import NavbarLinks from "./NavbarLinks";

const StyledNavbar = styled.nav`
    margin: 1rem 0;

    .ant-btn {
        display: none;
    }

    .ant-drawer-header, .ant-drawer-body {
            background: #151515;
         }

    @media (max-width: 600px) {
        margin: 1rem 0 0 1rem;

        .ant-btn {
            display: flex;
        }

        ul {
            display: none;
        }
    }
`


const Navbar = () => {

    return (
        <>
            <StyledNavbar>
                <NavbarDrawer />
                <NavbarLinks />
            </StyledNavbar>
        </>
    )
}

export default Navbar;