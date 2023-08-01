import styled from 'styled-components';
const InputContainer = styled.div`
margin: 10px;
`;
const Label = styled.label`
display: block;
margin-bottom: 5px;
color: #00420C;
`;
const InputField = styled.input`
background-color: #EEEFF1;
box-shadow: 2px 2px 10px rgba(0, 66, 12, 0.4);
border: none;
width: 300px;
padding: 12px;
color: #00420C;
margin-bottom: 10px;
border-radius: 10px;
`;
function Input({ label, type = 'text', placeholder, obrigatorio = true,
    value, name, onChange }) {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputField
                type={type}
                required={obrigatorio}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
        </InputContainer>
    )
}
export default Input;