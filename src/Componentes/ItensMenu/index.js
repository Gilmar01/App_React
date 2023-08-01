import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const textoOpcoes = ["Início", "Cursos", "Quem Somos", "Fale conosco", "Temperatura", "Servidores"];
const linksOpcoes = ["/", "/cursos", "/quem-somos", "/fale-conosco", "/temperatura-local", "/servidores"];
const Opcoes = styled.ul`
display: flex;
list-style: none;
`;
const Opcao = styled.li`
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100%;
`;
const StyledLink = styled(Link)`
padding: 2px 20px;
color: #fff;
cursor: pointer;
text-decoration: none;
${({ destacado }) => destacado && `
background-color: #0e6e1e;
border-radius: 6px;
`}
&:hover {
border-bottom: 2px solid white;
}
`;
function ItensMenu() {
    const localizacao = useLocation();
    return (
        <Opcoes>
            {textoOpcoes.map((texto, index) => (
                <Opcao key={texto}>
                    <StyledLink
                        destacado={localizacao.pathname === linksOpcoes[index]}
                        to={linksOpcoes[index]}>
                        {texto}
                    </StyledLink>
                </Opcao>
            ))}
        </Opcoes>
    );
}
export default ItensMenu;