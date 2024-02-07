import { Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarouselNav = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: "50px"
      };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Paper elevation={8}>
                    <h3>1</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>2</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>3</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>4</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>5</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>6</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>7</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>8</h3>
                </Paper>
                <Paper elevation={8}>
                    <h3>9</h3>
                </Paper>
            </Slider>
        </div>
    );
}
