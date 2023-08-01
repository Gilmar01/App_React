import styled from "styled-components";
const Section = styled.section`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const Img = styled.img`
width: 50%;
`;
function NaoEncontrada() {
    return (
        <Section>
            <Img src="/images/erro.png" alt="página não encontrada" />
            <p> A página não foi encontrada! </p>
        </Section>
    );
}
export default NaoEncontrada;