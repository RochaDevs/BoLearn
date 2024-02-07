import { Box } from "@mui/material"
import { CarouselNav } from "../../components/Users/CarouselNav/indes"

export const UserPaginaPrincipal = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <h1>Página Principal</h1>
            < CarouselNav /> 
        </Box>
    )
}