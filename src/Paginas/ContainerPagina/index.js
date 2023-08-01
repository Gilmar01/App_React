import styled from "styled-components";
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
function ContainerPagina({ children }) {
    return <Container>{children}</Container>;
}
export default ContainerPagina;