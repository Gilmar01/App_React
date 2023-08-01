import styled from "styled-components";
import MenuSidebar from "../MenuSideBar";
const DivSidebar = styled.div`
width: 164px;
background-color: #fff;
display: flex;
flex-direction: column;
`;
function Sidebar() {
    const menuItems = [
    {
    texto: "A INSTITUIÇÃO",
    links: [
    { nome: "Página Inicial", link: "#" },
    { nome: "Sobre", link: "#" },
    { nome: "Contato", link: "#" },
    ],
    },
    {
    texto: "ALUNO",
    links: [
    { nome: "Notas", link: "#" },
    { nome: "Calendário", link: "#" },
    { nome: "Horário", link: "#" },
    ],
    },
    {
    texto: "SERVIDOR",
    links: [
    { nome: "Folha de Pagamento", link: "#" },
    { nome: "Benefícios", link: "#" },
    { nome: "Recursos Humanos", link: "#" },
    ],
    },
    ];
    return (
    <DivSidebar>
    {menuItems.map((menuItem, index) => (
    <MenuSidebar
    key={index}
    texto={menuItem.texto}
    links={menuItem.links}
    />
    ))}
    </DivSidebar>
    );
    }
    export default Sidebar;