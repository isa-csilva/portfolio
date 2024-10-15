import Title from '../Title';
import Text from '../ParagraphText';
import styled from 'styled-components';
import ContactList from './ContactList';
import ContentColorfulBox from '../ContentColorfulBox';
import ContentContainer from '../ContentContainer';

const SiteInfoContainer = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 300;
        color: #3C415C;
        letter-spacing: 2px;
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
        <ContentContainer>
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