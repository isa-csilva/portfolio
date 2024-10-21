import Title from '../Title';
import Text from '../ParagraphText';
import styled from 'styled-components';
import ContactList from './ContactList';
import ContentColorfulBox from '../ContentColorfulBox';
import ContentContainer from '../ContentContainer';

const SiteInfoContainer = styled.div`
    width: 100vw;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    p {
        font-weight: 300;
        color: #3C415C;
        letter-spacing: 0.15rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`

const Footer = () => {

    let txtContact = <p>
        Fique à vontade para enviar uma mensagem, sugestão ou proposta de trabalho. 
        <br></br>
        Obrigada pela visita! ✨
    </p>
    
    return (
        <>
        <ContentContainer idName='footer'>
            <Title>Entre em contato comigo</Title>
            <Text posicao={'centro'}>
                {txtContact}
            </Text>
            <ContentColorfulBox>
                <ContactList />
            </ContentColorfulBox>
        </ContentContainer>

        <SiteInfoContainer>
            <p>Desenvolvido por Isabelly Costa Silva</p>
        </SiteInfoContainer>
        </>
        
    )
};


export default Footer;