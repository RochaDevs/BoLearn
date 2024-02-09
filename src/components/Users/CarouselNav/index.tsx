import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Card, Paper } from "@mui/material";

const StyledSliderContainer = styled.div`
    max-width: 100%;
    height: auto;
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
`;

const StyledPaper = styled(Card)`
    height: 5rem;
    width: 5rem;
    margin: 0 0.5rem;
`

export const CarouselNav = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true
    };

    return (
        <StyledSliderContainer className="slider-container">
            <StyledSlider {...settings}>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
                <StyledPaper>
                    <h1>530</h1>
                </StyledPaper>
            </StyledSlider>
        </StyledSliderContainer>
    );
};
