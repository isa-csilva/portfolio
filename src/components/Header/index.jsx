import styled from "styled-components";

const StyledHeader = styled.header`
    height: 25rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #B4A5A5;

    img {
        width: 17%;
        border-radius: 100%;
        border: 0.3rem solid #3C415C;
        margin-right: 2rem;
    }
    
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        margin-top: 2rem;
        padding: 0 1rem;

        img {
            margin: 0;
        }
    }

    @media (max-width: 600px) {
        margin: 1rem 0;
        padding: 0;

        img {
            width: 25%;
            margin: 0;
        }
    }
`

const TextHeader = styled.div`
    width: 80%;

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-weight: 300;
        margin-bottom: 3rem;
    }

    h1, h2 {
        line-height: 1.25rem;
        color: #bd6a93;
    }

    p {
        font-size: 1.15rem;
        font-weight: 200;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
            line-height: 2rem;
        }

        h2 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
                <img src="/foto.jpeg" alt="Foto Isa" />
                <TextHeader>
                    <p>Olá, eu sou a</p>
                    <h1>Isabelly Costa Silva</h1>
                    <h2>Desenvolvedora Front-End</h2>
                    <p>Seja bem-vindo(a) ao meu portifólio! <br></br>
                        Por aqui você verá um pouco sobre mim, minhas habilidades e conhecimentos,
                        meus projetos pessoais e minhas informações de contato. ✨</p>
                </TextHeader>
                
        </StyledHeader>
    )
}

export default Header;