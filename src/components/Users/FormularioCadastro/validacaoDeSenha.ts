
export const validacaoDeSenha = (senhaUsuario: string, senhaUsuarioConfirmacao: string): boolean => {
    return senhaUsuarioConfirmacao === senhaUsuario
}