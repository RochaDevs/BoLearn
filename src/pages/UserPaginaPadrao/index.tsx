import { Outlet } from "react-router-dom"
import { Cabecalho } from "../../components/Users/Cabecalho"
import { BotaoLogo } from "../../components/Users/BotaoLogo"
import { BotaoLocal } from "../../components/Users/BotaoLocal"
import { BarraPesquisa } from "../../components/Users/BarraPesquisa"
import { BotaoMenuLogin } from "../../components/Users/BotaoMenuLogin"


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
            />
            <Outlet />
        </>
    )
}