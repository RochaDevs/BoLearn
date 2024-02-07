import { IUsers } from "../../../Interfaces/IUsers";

export const validarSeOEmailExiste = (emailUsuario: string, dadosDosUsuarios: IUsers[] | undefined): boolean | undefined => {
    if(emailUsuario.length > 0) {
        const validacao = dadosDosUsuarios?.some(dadoUsuario => dadoUsuario.emailUsuario.includes(emailUsuario))
        return validacao
    } else {
        return false
    }
}
