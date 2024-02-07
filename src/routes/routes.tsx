import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../app/scss/Main.module.scss';
import { UserPaginaPadrao } from "../pages/UserPaginaPadrao";
import { UserPaginaLogin } from "../pages/UserPaginaLogin";
import { UserPaginaCadastro } from "../pages/UserPaginaCadastro";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsuarioEstaLogadoProvider } from "../hooks/useContext/usuarioEstaLogado";
import { UserPaginaPrincipal } from "../pages/UserPaginaPrincipal";

const queryCliente = new QueryClient();

const AppRoutes = () => {

    return (

        <QueryClientProvider client={queryCliente}>
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <UsuarioEstaLogadoProvider>
                                <UserPaginaPadrao />
                            </UsuarioEstaLogadoProvider>
                        }>
                            <Route path='/' element={<UserPaginaPrincipal />} />
                            <Route path='/UserLogin' element={<UserPaginaLogin />} />
                            <Route path='/UserCadastro' element={<UserPaginaCadastro />} />
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </QueryClientProvider>

    )

}

export default AppRoutes;