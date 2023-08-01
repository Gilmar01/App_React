import Input from "../../Paginas/Input";
import Button from "../../Paginas/Button";
import { FiSearch } from "react-icons/fi";
import ContainerPagina from "../../Paginas/ContainerPagina";
import ContainerForm from "../../Paginas/ContainerForm";
import { useState } from "react";
import ApiServidores from "../../Servicos/ApiServidores";
import Table from "../Table/index ";
function Servidores() {
    const [pesquisa, setPesquisa] = useState("");
    const [servidor, setServidor] = useState([]);
    const cabecalho = ["matricula", "nome", "titulacao"];
    async function pesquisar() {
        try {
            const response = await ApiServidores.get(
                `ar/api/3/action/datastore_search?q=${pesquisa}&resource_id=f69888cc-e9e
b-4071-af64-37d5a6fdd881`
            );
            if (response.data.result.records.length > 0) {
                const dadosSelecionados =

                    response.data.result.records.map((registro) => ({
                        matricula: registro.matricula,
                        nome: registro.nome,
                        titulacao: registro.titulacao,
                    }));
                setServidor(dadosSelecionados);
                setPesquisa("");
            }
        } catch (error) {
            console.error("Erro ao obter dados do servidor:", error.message);
        }
    }
    return (
        <ContainerPagina>
            <ContainerForm>
                <h2>Pesquisar servidores</h2>
                <Input
                    label="Servidor:"
                    placeholder="Digite o nome do servidor"
                    name="pesquisa"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
                <Button type="button" onClick={pesquisar}>
                    <FiSearch size={16} color="#FFF" /> Pesquisar
                </Button>
            </ContainerForm>
            {servidor.length > 0 ? (
                <Table cabecalho={cabecalho} registros={servidor} />
            ) : (
                <p>Nenhum dado encontrado.</p>
            )}
        </ContainerPagina>
    );
}
export default Servidores;