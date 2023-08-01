import axios from "axios"
const ApiServidores = axios.create({
baseURL: "https://dados.ifpi.edu.br/"
})
export default ApiServidores