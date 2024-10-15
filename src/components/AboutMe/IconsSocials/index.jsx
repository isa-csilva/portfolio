import styled from "styled-components";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";


const ContainerIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 55px;

    a:hover {
        transition: 1s;
        transform: scale(1.2);
    }

`

const IconsSocials = () => {
    return (
        <ContainerIcons>
            <a href="https://www.linkedin.com/in/isabelly-costa-silva-1b775b241/" target="_blank">
                <IoLogoLinkedin size={50} color="#3C415C"/>
            </a>
            <a href="https://github.com/isa-csilva" target="_blank">
                <FaGithubSquare size={50} color="#3C415C"/>
            </a>
        </ContainerIcons>
    )
}

export default IconsSocials;