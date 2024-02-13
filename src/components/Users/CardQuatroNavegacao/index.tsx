import { Card, Typography } from "@mui/material"
import styled from "styled-components"


export const CardQuatroNavegacao = () => {


    const StyledCard = styled(Card)`
        height: auto;
    `

    const StyledContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Define duas colunas de tamanho igual */
        grid-gap: 2rem; /* Adiciona um espaço entre as colunas e linhas */
    `

    const StyledImg = styled.img`
        max-width: 85%; /* Faz com que a imagem se ajuste à largura do contêiner, mantendo a proporção */
    `

    const StyledDiv = styled.div`
        display: flex; /* Faz com que a div ajuste seu tamanho ao do conteúdo */
        justify-content: center; /* Centraliza o conteúdo horizontalmente */
        align-items: center; /* Centraliza o conteúdo verticalmente */
        height: auto; /* Permite que a altura se ajuste ao conteúdo */
    `


    return (
        <StyledCard>
            <Typography>
                Determinado item em um preço
            </Typography>
            <StyledContainer>
                <StyledDiv>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem Teste" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem Teste" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem Teste" />
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem Teste" />
                </StyledDiv>
            </StyledContainer>
            <Typography>
                Veja mais em...
            </Typography>
        </StyledCard>
    )
}