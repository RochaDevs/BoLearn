import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Card, Typography } from "@mui/material";

const StyledSliderContainer = styled.div`
    max-width: 100%;
    height: 100%;
`;

const StyledSlider = styled(Slider)`
    max-width: 100%;
    height: 100%;
    
    .slick-prev,
    .slick-next {
        background-color: #6B8F71;
        border-radius: 50%; 
        color: white;
        z-index: 1;
    }

    .slick-track {
        display: flex;
        gap: 1rem;
        height: auto;
    }

`;

const StyledCard = styled(Card)`
    height: auto;
    width: auto;
`

const StyledImg = styled.img`
    height: auto;
    width: 100%;
`

interface ISlideNavegacao {
    tituloCarousel: string
}

export const SlideNavegacao = ({ tituloCarousel }: ISlideNavegacao) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        centerMode: true
    };

    return (
        <StyledSliderContainer className="slider-container">
            <Typography>
                {tituloCarousel}
            </Typography>
            <StyledSlider {...settings}>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
                <StyledCard>
                    <StyledImg src="/public/imgmodelo.png" alt="Imagem teste" />
                </StyledCard>
            </StyledSlider>
        </StyledSliderContainer>
    );
};
