import { Fragment } from "react"
import Responsive from "./resturant-carsoule-format";
import { $all, handleSticky, _$, partySize, timeList } from "@/lib/utils";
import { useEffect, useState } from "react";
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
function DinningCarouselList({ diningList, select }: { diningList: DiningType[], select: string | Date }) {
    const [isLoading, setIsLoading] = useState(false);
    const [size, setSize] = useState("2 Guests");
    function partyHand(guessNum: string) {
        setSize(guessNum)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 500);
    }, [isLoading])

    return (<Fragment>
        <section className="list-of-all-resturant">
            <div className="container">
                <div className="number-of-guesses-reseve text-left text-lg-center ps-3 ps-lg-0">
                    <label className="d-block mb-2 ">Guests</label>
                    <button type="button" className="btn dropdown-toggle btn-number-people" data-bs-toggle="dropdown" aria-expanded="false">{size}</button>
                    <ul className="dropdown-menu">
                        {partySize?.map((size: any, i: number) => <li key={i}><button className="dropdown-item" onClick={() => partyHand(size)}>{size}</button></li>)}
                    </ul>
                    <input className="data" name="size1" type="hidden" defaultValue={size} />
                </div>
            </div>
            <div className=" mt-3 carousel-format">

                {isLoading ? <Fragment>
                    {diningList?.map((item, index) => (
                        <Responsive allItems={item.restaurants} title={item.category_title} numGuess={size} select={select} key={index} />
                    ))
                    }
                </Fragment> : <p className="text-center">loading....</p>}
            </div>
        </section>
    </Fragment>)
}
export default DinningCarouselList