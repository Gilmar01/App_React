import styled from 'styled-components';
const ButtonContainer = styled.button`
background-color: #00420C;
color: #FFFFFF;
border: none;
padding: 10px 20px;
border-radius: 10px;
cursor: pointer;
&:hover{
background-color: #0E6E1E;
}
`;
function Button({ children, onClick }) {
    return (
        <ButtonContainer onClick={onClick}>
            {children}
        </ButtonContainer>
    );
}
export default Button;