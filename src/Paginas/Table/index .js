import styled from "styled-components";
import ContainerForm from "../ContainerForm";
const Tb = styled.table`
border-collapse: collapse;
`;
const Tr = styled.tr`
background-color: #eeeff1;
&:nth-child(even) {
background-color: #0e6e1e55;
}
`;
const Th = styled.th`
background-color: #00420c;
font-weight: lighter;
color: #fff;
padding: 6px 24px;
`;
const Td = styled.td`
padding: 6px 24px;
`;
function Table({ cabecalho, registros }) {
    const renderizarLista = (dados) => {
        return Object.values(dados).map((dado) => <Td>{dado}</Td>);
    };
    return (
        <ContainerForm>
            <Tb>
                <thead>
                    <Tr>
                        {cabecalho.map((cab, index) => (
                            <Th key={index}>{cab}</Th>
                        ))}
                    </Tr>
                </thead>
                <tbody>
                    {registros.map((registro, ind) => (
                        <Tr key={ind}>{renderizarLista(registro)}</Tr>
                    ))}
                </tbody>
            </Tb>
        </ContainerForm>
    );
}
export default Table;