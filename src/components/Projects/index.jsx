import ContentContainer from "../ContentContainer";
import Title from "../Title";
import Card from "./ProjectCard";
import CardsGrid from "./Grid";

const Projects = () => {
  return (
    <ContentContainer idName="projetos">
      <Title>Projetos</Title>
      <CardsGrid>
        <Card
          imagem="/gerenciador-de-tarefas.png"
          descricaoImg="Tela inicial do projeto Gerenciador de Tarefas"
          titulo="Gerenciador de Tarefas"
          descricao="O Gerenciador de Tarefas é uma aplicação onde você pode criar, ver os detalhes e excluir tarefas."
          linkCodigo="https://github.com/isa-csilva/gerenciador-de-tarefas"
          linkDeploy="https://gerenciador-de-tarefas-zeta.vercel.app/"
        />
        <Card
          imagem="/clone-spotify.png"
          descricaoImg="Tela inicial do projeto Clone de Spotify"
          titulo="Clone Spotify"
          descricao="Esse projeto visa ser um clone da tela inicial do Spotify, onde deve mostrar as músicas e artistas populares."
          linkCodigo="https://github.com/isa-csilva/projeto-clone-spotify"
          linkDeploy="https://github.com/isa-csilva/projeto-clone-spotify"
        />
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
  );
};

export default Projects;
