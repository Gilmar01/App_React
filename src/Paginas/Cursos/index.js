import { useContext, useState, useEffect } from "react";
import ContainerPagina from "../../Paginas/ContainerPagina";
import { NameContext } from "../../Contextos/NameContext";
import Table from "../Table/index ";
function Cursos() {
    const { nome } = useContext(NameContext);
    const cabecalho = ["ID", "Cursos", "Quantidade de alunos"];
    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        const lerArquivoJson = async () => {
            try {
                const data = require("../cursos.json");
                setCursos(data);
            } catch (error) {
                console.error("Erro ao ler o arquivo JSON:", error);
            }
        };
        lerArquivoJson();
    }, []);
    return (
        <ContainerPagina>
            <b>{nome},</b> esta é a página de cursos.
            <Table cabecalho={cabecalho} registros={cursos} />
        </ContainerPagina>
    );
}
export default Cursos;