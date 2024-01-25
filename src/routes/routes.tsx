import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../app/scss/Main.module.scss';
import { UserPaginaPadrao } from "../pages/UserPaginaPadrao";
import { UserPaginaLogin } from "../pages/UserPaginaLogin";
import { UserPaginaCadastro } from "../pages/UserPaginaCadastro";

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={
                        <UserPaginaPadrao />
                    }>
                        <Route path='/UserLogin' element={<UserPaginaLogin />}/>
                        <Route path='/UserCadastro' element={<UserPaginaCadastro />}/>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>

    )

}

export default AppRoutes;