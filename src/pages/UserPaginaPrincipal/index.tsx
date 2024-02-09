import { Box } from "@mui/material"
import { SlideNavegacao } from "../../components/Users/SlideNavegacao"
import { CardUnicoNavegacao } from "../../components/Users/CardUnicoNavegacao"

export const UserPaginaPrincipal = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'auto',
            margin: '2rem 4rem',
            gap: '2rem'
        }}>

            <SlideNavegacao
                tituloCarousel="Mais vendidos em Titulo Qualquer"
            />

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}>
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
            </Box>

            <SlideNavegacao
                tituloCarousel="Mais vendidos em Titulo Qualquer"
            />
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}>
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
            </Box>

            <SlideNavegacao
                tituloCarousel="Mais vendidos em Titulo Qualquer"
            />
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}>
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
            </Box>

            <SlideNavegacao
                tituloCarousel="Mais vendidos em Titulo Qualquer"
            />
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}>
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
            </Box>

            <SlideNavegacao
                tituloCarousel="Mais vendidos em Titulo Qualquer"
            />
            
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}>
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
                <CardUnicoNavegacao />
            </Box>
        </Box>
    )
}