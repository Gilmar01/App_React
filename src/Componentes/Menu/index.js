import styled from "styled-components";
import ItensMenu from "../ItensMenu";
const MenuSite = styled.nav`
background-color: #00420c;
display: flex;
height: 30px;
align-items: center;
justify-content: center;
`;
function Menu() {
    return (
        <MenuSite>
            <ItensMenu />
        </MenuSite>
    );
}
export default Menu;

