import IconsSocials from "./IconsSocials"
import Title from '../Title'
import Text from '../ParagraphText'
import ContentContainer from "../ContentContainer"

    
const AboutMe = () => {
    let txtAboutMe = <p>
        Me formei em <strong>Gestão de TI</strong> em 2022 e foi no final dessa graduação onde descobri meu interesse pela
            área de programação, desde então venho estudando o Desenvolvimento Front-end, sempre buscando <strong>aprimorar minhas habilidades
            e desenvolver sites e aplicações rápidas, fluidas e amigáveis ao usuário.</strong> <br></br>
        
        Ao longo da minha jornada como estudante de Desenvolvimento Front-end já estudei e desenvolvi aplicações e sites com <strong><span>HTML, CSS, JavaScript, React, Angular, Phyton e MySQL.</span></strong> No momento, tenho como foco os estudos em React! <br></br><br></br>

        Atualmente sou graduanda em <strong>Engenharia de Software</strong>, sempre fui muito dedicada aos estudos e empenhada em aprender cada vez mais,
            com isso, nessa segunda graduação estou aprofundado meus conhecimentos sobre os processos de desenvolvimento de software, sua arquitetura, e demais assuntos teóricos
            também muito importantes para qualquer profissional.
    </p>

    return (
        <ContentContainer>
            <Title>Sobre Mim</Title>
            <Text>
                {txtAboutMe}
            </Text>

            <IconsSocials />
        </ContentContainer>
        
    )
}

export default AboutMe