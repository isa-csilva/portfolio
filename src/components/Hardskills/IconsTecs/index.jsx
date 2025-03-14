import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import ContentColorfulBox from "../../ContentColorfulBox";

const IconsList = styled.ul`
  list-style-type: none;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
`;

const IconItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    color: #b4a5a5;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    svg {
      width: 2.5rem;
    }

    p {
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
  }
`;

const IconsTecs = () => {
  return (
    <ContentColorfulBox>
      <IconsList>
        <IconItem>
          <FaReact size={65} color={"#B4A5A5"} />
          <p>React</p>
        </IconItem>
        <IconItem>
          <IoLogoJavascript size={65} color={"#B4A5A5"} />
          <p>JavaScript</p>
        </IconItem>
        <IconItem>
          <SiMysql size={65} color={"#B4A5A5"} />
          <p>MySQL</p>
        </IconItem>
        <IconItem>
          <FaHtml5 size={65} color={"#B4A5A5"} />
          <p>HTML</p>
        </IconItem>
        <IconItem>
          <FaCss3Alt size={65} color={"#B4A5A5"} />
          <p>CSS</p>
        </IconItem>
        <IconItem>
          <FaAngular size={65} color={"#B4A5A5"} />
          <p>Angular</p>
        </IconItem>
        <IconItem>
          <SiTypescript size={65} color={"#B4A5A5"} />
          <p>TypeScript</p>
        </IconItem>
        <IconItem>
          <RiTailwindCssFill size={65} color={"#B4A5A5"} />
          <p>TailwindCSS</p>
        </IconItem>
      </IconsList>
    </ContentColorfulBox>
  );
};

export default IconsTecs;
