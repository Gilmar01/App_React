import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import ContainerForm from "../ContainerForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FormFaleConosco() {
function confirmacao(event) {
event.preventDefault()
return toast.success("Sua mensagem foi enviada com sucesso!");
}
return (
<ContainerForm>
<h2>Fale Conosco</h2>
<form onSubmit={confirmacao}>
<Input label="Nome completo:" placeholder="Digite seu nome

completo" />

<Input label="Assunto:" placeholder="Digite o assunto" />
<Textarea
label="Mensagem:"
placeholder="Digite sua mensagem"
/>
<Button>Enviar formulário</Button>
</form>
<ToastContainer />
</ContainerForm>
);
}
export default FormFaleConosco;