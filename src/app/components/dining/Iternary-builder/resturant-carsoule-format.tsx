"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import resturant1 from "../../../../../public/images/image1-res.png"
import { settings } from "@/lib/utils/dining";
type DiningType = {
    category_title: string;
    dine_id: string;
    account_id: string;
    title: string;
    description: string;
    short_description: string;
    desktop_hero_image: string;
    mobile_hero_image: string;
}

const Carousel = ({ allItems, title, numGuess, select }: { allItems: DiningType[], title: string, numGuess: string, select: string | Date }) => {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1000);
    }, [isLoading]);

    return (
        <div className="carousel-holder">
            <div className="container">
                <h3 className=" mt-3 text-left text-lg-center text-uppercase ps-3 ps-lg-0">{title}</h3>
                <Slider {...settings}>
                    {allItems.map((rest, index) => (
                        <div className="card d-flex align-item-stretch" key={index}>
                            <Link href="/dining/resevations">
                                <div className="image-fill">
                                    <Image src={rest.desktop_hero_image} width={890} height={179} alt="image-update" />
                                </div>
                            </Link>
                            <div className="card-body  text-left text-lg-center">
                                <p className="card-title name">{rest.title}</p>
                                <p className="card-text">
                                    {rest.short_description}
                                </p>
                                <p className="card-text ">
                                    {numGuess}
                                </p>
                            </div>

                            <div className="card-footer bg-transparent border-0">
                                <div className="ctas-avai-hours text-center">
                                    <Link className=" btn-secondary" href={`/dining/resevations/${rest.title}?time=${"7:30"}&date=${select}&title=${rest.title}&id=${rest.account_id}&categ=${title}&guessNum=${numGuess}`}>7:30 pm </Link>
                                    <Link className=" btn-secondary" href={`/dining/resevations/${rest.title}?time=${"7:30"}&date=${select}&title=${rest.title}&id=${rest.account_id}&categ=${title}&guessNum=${numGuess} `}>7:30 pm  </Link>
                                    <Link className=" btn-secondary" href={`/dining/resevations/${rest.title}?time=${"7:30"}&date=${select}&title=${rest.title}&id=${rest.account_id}&categ=${title}&guessNum=${numGuess}`}>7:30 pm  </Link>
                                </div>
                                <p className="text-center">only 2 spots left</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};



export default Carousel;