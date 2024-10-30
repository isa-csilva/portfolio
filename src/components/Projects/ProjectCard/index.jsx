import styled from "styled-components";

const StyledCard = styled.div`
  width: 21.5rem;
  height: fit-content;
  background-color: rgba(60, 65, 92, 0.2);
  border-radius: 2rem;
  color: #B4A5A5;
  display: flex;
  flex-direction: column;

  
  img {
    border-radius: 2rem 2rem 0 0;
    max-width: 21.5rem;
  }

  h3 {
    color: #bd6a93;
    margin: 1rem 0 0.5rem 0;
  }

  p {
    margin: 0;
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .card-text {
    margin: 0 1rem;
  }

  .card-info {
    padding: 0.6rem;
    font-size: 0.8rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 0.5rem;
    }
  }

  .card-buttons {
    padding: 0.6rem;
    margin: 1rem 0 0.5rem 0;
    
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    a {
      text-decoration: none;
      font-size: 0.9rem;
      color: #bd6a93;
      border-radius: 0.6rem;
      padding: 0.4rem;
      font-weight: 500;
    }

    a:hover {
        transition: 0.5s;
        color: #151515;
        background-color: #bd6a93;
      }
  }

  @media (max-width: 600px) {
    
  }

`

const Card = ({imagem, descricaoImg, titulo, descricao, linkCodigo, linkDeploy}) => {
  return (
    <StyledCard>
      <img src={imagem} alt={descricaoImg}></img>
      
      <div className="card-text">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
      
      <div className="card-buttons">
        <ul>
          <li>
            <a target="_blank" href={linkCodigo}>GitHub</a>
          </li>
          <li>
            <a target="_blank" href={linkDeploy}>Ver deploy</a>
          </li>
        </ul>
      </div>
      
    </StyledCard>
  )
}

export default Card;