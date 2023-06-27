"use client"
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true, // Enable swiping on touch devices  
    touchThreshold: 10, // Adjust touch sensitivity    
    draggable: true, // Enable dragging the carousel    
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Use CSS easing for smoother transitions
    responsive: [
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
};


const Date: string[] = [
    "Fri, April 2", "Fri, April 3", "Fri, April 4", "Fri, April 5", "Fri, April 6", "Fri, April 7", "Fri, April 8", "Fri, April 9"
]
const DateCarousel = ({ selectedDates }: { selectedDates: (data: string) => void }) => {
    const [data, setData] = useState(Date[0]);
    const customSlider = useRef<Slider>(null);

    useEffect(() => {
        selectedDates(data);
    }, [data])
    return (
        <section className="text-center date-carsouel-formats">
            <Slider ref={customSlider} {...settings} >
                {
                    Date.map((item, index) => (
                        <div className={`date-to-select`} key={index}>
                            <button className={`date-to-select-chooses ${(item == data ? "active" : "")}`} onClick={() => setData(item)}> {item} </button>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
};

export default React.memo(DateCarousel);
