import imgLogo from "./logo.png";
import styled from "styled-components";
const Div = styled.div`
background-color: #fff;
border-radius: 5px;
height: 120px;
box-shadow: 2px 2px 2px 2px black;
`;
const Img = styled.img`
height: 90%;
`;
function Logo() {
return (
<Div>
<Img src={imgLogo} alt="Logo IFPI" />
</Div>
);
}
export default Logo