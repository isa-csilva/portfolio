import ContentContainer from "../ContentContainer";
import Title from "../Title";
import Card from './ProjectCard'
import CardsGrid from "./Grid";

const Projects = () => {
    return (
        <ContentContainer idName='projetos'>
            <Title>Projetos</Title>
            <CardsGrid>
                <Card
                    imagem="/projeto-fokus.png"
                    descricaoImg="Tela inicial do Projeto Fokus" 
                    titulo="Projeto Fokus"
                    descricao="O projeto Fokus foi feito pensando no método de estudos Podomoro, 
                                que utiliza de um temporizador para definir o tempo de estudos e de descanso. 
                                A aplicação também apresenta uma lista de tarefas, que podem ser inseridas, excluídas e editadas."
                    linkCodigo="https://github.com/isa-csilva/projeto-fokus"
                    linkDeploy="https://projeto-fokus-2gf28yi63-isa-csilva.vercel.app/"
                />

                <Card
                    imagem="/projeto-space-app.png"
                    descricaoImg="Tela incial do Projeto Space App" 
                    titulo="Space App"
                    descricao="Spape App é uma página que te mostra várias imagens do espaço. É possível filtrar as imagens por estrelas,
                                galáxas, luas e planetas. Você também pode expandir as imagens e favoritá-las!"
                    linkCodigo="https://github.com/isa-csilva/SpaceApp"
                    linkDeploy="https://space-app-eta-weld.vercel.app/"
                />
            </CardsGrid>    
        </ContentContainer>
    )
}

export default Projects;