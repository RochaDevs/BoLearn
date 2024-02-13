import { Card, Typography } from "@mui/material"
import styled from "styled-components"


export const CardUnicoNavegacao = () => {

    const StyledCard = styled(Card)`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const StyledImg = styled.img`
        max-width: 100%; /* Faz com que a imagem se ajuste à largura do contêiner, mantendo a proporção */
    `
    return (
        <StyledCard>
            <Typography>
                Determinado item em um preço
            </Typography>
            <StyledImg src="/public/imgmodelo.png" alt="Imagem Teste" />
            <Typography>
                Veja mais em...
            </Typography>
        </StyledCard>
    )
}