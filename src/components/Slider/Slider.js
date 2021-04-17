import React from "react";
import Carousel from "react-elastic-carousel";

const Slider = props => {
    return (
        <Carousel >
           {props.children}
        </Carousel>
    )

}

export default (Slider)

