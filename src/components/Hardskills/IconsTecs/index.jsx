import styled from "styled-components"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import ContentColorfulBox from "../../ContentColorfulBox";

const IconsList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 65px;
    margin: 20px;
`

const IconItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-weight: 500;
        color: #B4A5A5;
        margin-top: 15px;
        margin-bottom: 0;
    }
`

const IconsTecs = () => {
    return (
        <ContentColorfulBox>
            <IconsList>
                <IconItem>
                    <FaReact size={65} color={"#B4A5A5"}/>
                    <p>React</p>
                </IconItem>
                <IconItem>
                    <IoLogoJavascript size={65} color={"#B4A5A5"}/>
                    <p>JavaScript</p>
                </IconItem>
                <IconItem>
                    <SiMysql size={65} color={"#B4A5A5"}/>
                    <p>MySQL</p>
                </IconItem>
                <IconItem>
                    <FaHtml5 size={65} color={"#B4A5A5"}/>
                    <p>HTML</p>
                </IconItem>
                <IconItem>
                    <FaCss3Alt size={65} color={"#B4A5A5"}/>
                    <p>CSS</p>
                </IconItem>
            </IconsList>
        </ContentColorfulBox>
        
    )
}

export default IconsTecs;