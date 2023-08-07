import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const listar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}