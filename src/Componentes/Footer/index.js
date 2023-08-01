import styled from "styled-components";
const BarraFooter = styled.div`
margin-top: 20px;
background-color: #00420c;
height: 10px;
`;
const FooterInf = styled.div`
background: #0e6e1e;
color: #fff;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.img`
width: 80px;
height: 90px;
`;
const Footer = () => {
    return (
        <> 
            <BarraFooter />
            <FooterInf>
                <section>
                    <Logo src="/images/logo.png" alt="logo" />
                </section>
                <section>
                    <p>Desenvolvido por Gilmar Moura.</p>
                </section>
                
            </FooterInf>
        </>
    );
};
export default Footer;