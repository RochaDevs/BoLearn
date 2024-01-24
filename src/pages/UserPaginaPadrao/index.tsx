import { Outlet } from "react-router-dom"
import { Cabecalho } from "../../components/Users/Cabecalho"
import { BotaoLogo } from "../../components/Users/BotaoLogo"
import { BotaoLocal } from "../../components/Users/BotaoLocal"
import { BarraPesquisa } from "../../components/Users/BarraPesquisa"
import { BotaoMenuLogin } from "../../components/Users/BotaoMenuLogin"
import { BotaoPedidos } from "../../components/Users/BotaoPedidos"
import { BotaoCarrinho } from "../../components/Users/BotaoCarrinho"


export const UserPaginaPadrao = () => {
    return (
        <>
            <Cabecalho 
                botaoLogo={
                    <BotaoLogo />
                }
                botaoLocal={
                    <BotaoLocal />
                }
                barraPesquisa={
                    <BarraPesquisa />
                }
                botaoMenuLogin={
                    <BotaoMenuLogin />
                }
                botaoPedidos={
                    <BotaoPedidos />
                }
                botaoCarrinho={
                    <BotaoCarrinho />
                }
            />
            <Outlet />
        </>
    )
}