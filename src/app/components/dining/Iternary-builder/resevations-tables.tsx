"use client"
import Image from "next/image";
import { Fragment, use } from "react";
import DateCarousel from "./date-carsoule-format";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { $all, handleSticky, _$, partySize, timeList } from "@/lib/utils";
import Responsive from "./resturant-carsoule-format";
import DateAvailable from "./dateAvailable";
import DinningCarouselList from "./diningCarouselItem";
type DiningType = {
    category_title: string;
    restaurants: [];
    dine_id: string;
    account_id: string;
    title: string;
    description: string;
    short_description: string;
    desktop_hero_image: string;
    mobile_hero_image: string;
}

function ReserveToBookTable({ diningList }: { diningList: DiningType[] }) {
    const [avaiable, setAvaiable] = useState(" ");

    function handlerSelected(data: string) { // receive data from the dateAvaiable.tsx of the selected date 
        setAvaiable(data)
    }
    
    return (<Fragment>
        <DateAvailable selected={handlerSelected} />
        <DinningCarouselList diningList={diningList} select={avaiable} />
    </Fragment >)
}
export default ReserveToBookTable;

