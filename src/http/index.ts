import axios from 'axios';

export const httpCadastrarUsers = axios.create({
    baseURL: 'https://65bbd96a52189914b5bd367a.mockapi.io/boLearn/cadastrarUsuarios'
});