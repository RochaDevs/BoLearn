import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../app/scss/Main.module.scss';
import { UserPaginaPadrao } from "../pages/UserPaginaPadrao";

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={
                        <UserPaginaPadrao />
                    }>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>

    )

}

export default AppRoutes;