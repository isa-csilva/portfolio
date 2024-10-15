import Title from '../Title';
import Text from '../ParagraphText';
import IconsTecs from './IconsTecs';
import ContentContainer from '../ContentContainer';

const Hardskills = () => {
    let txtHardSkills = <p>
        Além de estudar bastante nas graduações, busco complementar meus estudos com outros cursos extra-curriculares. <br></br>
        As tecnologias listadas a baixo são as tecnologias as quais já estudei e já utilizei.
    </p>
    return (
        <ContentContainer>
            <Title>Habilidades e Conhecimentos</Title>
            <Text>
                {txtHardSkills}
            </Text>

            <IconsTecs />
        </ContentContainer>
    )
}

export default Hardskills;