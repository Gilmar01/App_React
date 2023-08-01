import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import ContainerForm from "../ContainerForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function Formulario() {
    const [user, setUser] = useState({
        nome: "",
        assunto: "",
        mensagem: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const confirmacao = (event) => {
        event.preventDefault();
        setUser({
            nome: "",
            assunto: "",
            mensagem: "",
        });
        toast.success("Sua mensagem foi enviada com sucesso!");
    };

    return (

        <ContainerForm>
            <form onSubmit={confirmacao}>
                <h2>Fale Conosco</h2>
                <Input
                    label="Nome completo:"
                    placeholder="Digite seu nome completo"
                    value={user.nome}
                    name="nome"
                    onChange={handleInputChange}
                />
                <Input
                    label="Assunto:"
                    placeholder="Digite o assunto"
                    value={user.assunto}
                    name="assunto"
                    onChange={handleInputChange}
                />
                <Textarea
                    label="Mensagem:"
                    placeholder="Digite sua mensagem"
                    value={user.mensagem}
                    name="mensagem"
                    onChange={handleInputChange}
                />
                <Button type="submit">Enviar formulário</Button>
            </form>
            <ToastContainer />
        </ContainerForm>
    );
}
export default Formulario;