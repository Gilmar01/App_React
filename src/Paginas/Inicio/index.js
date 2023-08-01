import { useContext, useState } from "react";
import ContainerPagina from "../../Paginas/ContainerPagina";
import Input from "../../Paginas/Input";
import Button from "../../Paginas/Button";
import { NameContext } from "../../Contextos/NameContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerForm from "../../Paginas/ContainerForm";
function Inicio() {
    const { alterarNome } = useContext(NameContext);
    const [nomeInput, setNomeInput] = useState("");
    const handleNomeChange = (event) => {
        setNomeInput(event.target.value);
    };
    const handleButtonClick = () => {
        alterarNome(nomeInput);
        toast.success(`Seja bem-vindo, ${nomeInput}!`);
    };

    return (
        <ContainerPagina>
            <ContainerForm>
                Identifique-se. Digite seu nome.
                <Input value={nomeInput} onChange={handleNomeChange} />
                <Button onClick={handleButtonClick}>Inserir nome</Button>
            </ContainerForm>
            <ToastContainer />
        </ContainerPagina> 
    );
}
export default Inicio;