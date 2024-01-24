import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


export const BotaoPedidos = () => {
    return (
        <>
            <Button sx={{color: '#6B8F71'}}>
                <NavLink to='/Pedidos'>
                    Devoluções e Pedidos
                </NavLink>
            </Button>
        </>
    )
}