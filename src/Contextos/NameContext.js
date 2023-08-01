import { createContext, useState } from "react";
export const NameContext = createContext();
export const NameProvider = ({ children }) => {
const [nome, setNome] = useState("Usuário");
const alterarNome = (novoNome) => {
setNome(novoNome);
};
return (
<NameContext.Provider value={{ nome, alterarNome }}>
{children}
</NameContext.Provider>
);
};