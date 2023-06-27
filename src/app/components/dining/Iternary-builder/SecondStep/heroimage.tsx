import Image from "next/image";
import React, { Fragment } from "react";
import Slider from "react-slick";
const HeroImage = ({ imageDesktop }: { imageDesktop: any }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true, // Enable swiping on touch devices  
        touchThreshold: 10, // Adjust touch sensitivity    
        draggable: true, // Enable dragging the carousel    
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Use CSS easing for smoother transitions
    };
    console.log(imageDesktop)
    return (
        <Fragment >
            <section className="hero">
                {/* <Slider {...settings}>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                    <div className="text-center">yonathan</div>
                </Slider> */}
                <div className="hero-image">
                    <Image src={imageDesktop} height={600} width={1600} alt="hero image" />
                </div>
            </section>
        </Fragment>);
};
export default HeroImage;