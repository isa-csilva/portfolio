import styled from "styled-components";

const StyledHeader = styled.header`
    height: 400px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #B4A5A5;

    img {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 5px solid #3C415C;
        margin-right: 30px;
    }
    
`

const TextHeader = styled.div`
    width: 900px;

    h1 {
        font-size: 35px;
    }

    h2 {
        font-weight: 300;
        margin-bottom: 50px;
    }

    h1, h2 {
        line-height: 20px;
        color: #bd6a93;
    }

    p {
        font-size: 18px;
        font-weight: 200;
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