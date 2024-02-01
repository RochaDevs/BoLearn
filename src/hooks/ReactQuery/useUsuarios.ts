import { useMutation, useQuery } from "react-query";
import { IUsers } from "../../Interfaces/IUsers";
import { httpCadastrarUsers } from "../../http";

export const usePostUsuario = () => {
    return useMutation({
        mutationFn: (novoUsuario: IUsers) => httpCadastrarUsers.post('', novoUsuario).then(() => {
            alert('Usuário cadastrado com sucesso')
        })
    })
}

export const useGetUsuarios = () => {
    return useQuery<IUsers[], Error>({
        queryKey: ['usuarios'],
        queryFn: () => httpCadastrarUsers.get('').then(resposta => resposta.data)
    });
};