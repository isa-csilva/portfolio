import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import styled from "styled-components";

const StyledContactList = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    color: #B4A5A5;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;
            gap: 0.9rem;
            font-weight: 600;
            font-size: 1.25rem;
            margin: 0.5rem 0;
        }

        a {
            color: #B4A5A5;
            text-decoration: none;
            margin: 0.5rem 0
        }
        a:hover, a:active {
            color: #bd6a93;
        }        
    }

    @media (max-width: 900px) {
        justify-content: center;
        gap: 1rem;

            li {
                flex-direction: row;
                gap: 0.5rem;
            }
        }

    @media (max-width: 600px) {
        li span, p, a {
            font-size: 1rem;
            gap: 0.5rem;
        }
    }

    @media (max-width: 400px) {
        li span, p, a {
            font-size: 0.9rem;
            gap: 0.5rem;
        }
    }
`

const ContactList = () => {
    return (
        <StyledContactList>
            <li>
                <span><FaWhatsapp size={20}/> Telefone/WhatsApp </span>
                <p>(87)9 8831-6051</p>
            </li>

            <li>
                <span><MdOutlineEmail size={20}/> E-mail </span>
                <p>isabellycosta267@gmail.com</p>
            </li>

            <li>
                <span><IoShareSocialSharp  size={20}/> Links </span>
                <a 
                href="https://www.linkedin.com/in/isabelly-costa-silva-1b775b241/"
                target="_blank">
                    LinkedIn
                </a>
                <a 
                href="https://github.com/isa-csilva"
                target="_blank">
                    GitHub
                </a>
            </li>
        </StyledContactList>

    )
}

export default ContactList;