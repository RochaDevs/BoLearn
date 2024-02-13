import { Box } from "@mui/material"
import { SlideNavegacao } from "../../components/Users/SlideNavegacao"
import { CardUnicoNavegacao } from "../../components/Users/CardUnicoNavegacao"
import { CardQuatroNavegacao } from "../../components/Users/CardQuatroNavegacao"

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
                gap: '1rem',
                height: '50%'


            }}>
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
                <CardQuatroNavegacao />
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
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
                <CardQuatroNavegacao />
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
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
                <CardQuatroNavegacao />
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
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
                <CardQuatroNavegacao />
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
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
                <CardQuatroNavegacao />
                <CardUnicoNavegacao />
            </Box>
        </Box>
    )
}