import { useMutation } from "react-query";
import { IUsers } from "../../Interfaces/IUsers";
import { httpCadastrarUsers } from "../../http";

export const usePostUsuario = () => {
    return useMutation({
        mutationFn: (novoUsuario: IUsers) => httpCadastrarUsers.post('', novoUsuario).then(() => {
            alert('Usuário cadastrado com sucesso')
        })
    })
}