import styled from "styled-components";
import Logo from "../Logo";
const HeaderContainer = styled.header`
background-color: #0e6e1e;
display: flex;
height: 150px;
align-items: center;
justify-content: space-around;
`;
const ContainerTextos = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
`;
const Sigla = styled.h6`
color: #fff;
margin: 0;
`;
const Completo = styled.h2`
font-size: 35px;
color: #fff;
margin: 0;
`;
const Ministerio = styled.h6`
color: #fff;
margin: 0;
`;

function Header() {
    return (
        <HeaderContainer>
            <ContainerTextos>
                <Sigla>IFPI</Sigla>
                <Completo>Instituto Federal do Piauí</Completo>
                <Ministerio>MINISTÉRIO DA EDUCAÇÃO</Ministerio>
            </ContainerTextos>
            <Logo />
        </HeaderContainer>
    )
}
export default Header