import { Box } from "@mui/material"
import { CarouselNav } from "../../components/Users/CarouselNav"

export const UserPaginaPrincipal = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            margin: '0rem 4rem'
        }}>
            < CarouselNav /> 
        </Box>
    )
}