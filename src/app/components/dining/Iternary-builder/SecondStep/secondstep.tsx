import { Fragment } from "react";
import HeroImage from "./heroimage";
import AddReservationConfirm from "./addReservationConfim";
type Time = {
    timerSelected: string;
    titleSelected: string;
    AllAvaible: Date;
    categories: string;
    id: string;
}
type DiningType = {
    category_title: string;
    dine_id: string;
    restaurants: [];
    account_id: string;
    title: string;
    description: string;
    short_description: string;
    desktop_hero_image: string;
    mobile_hero_image: string;
}

function SecondTimeAvaiable({ selectedTime, diningList }: { selectedTime: Time, diningList: DiningType[] }) {
    const findCateg: DiningType | undefined = diningList.find((item) => item.category_title == selectedTime.categories);
    const findResturant: DiningType | undefined = findCateg?.restaurants.find((item: {
        dine_id: string | undefined;
        account_id: string | undefined;
        title: string | undefined;
        description: string | undefined;
        short_description: string | undefined;
        desktop_hero_image: string | undefined;
        mobile_hero_image: string | undefined;
    }) => item?.account_id == selectedTime.id);
    console.log(selectedTime)
    return (
        <Fragment>
            <h1>teston</h1>
            {/* /    <HeroImage imageDesktop={findResturant?.desktop_hero_image} /> */}
            {/* <AddReservationConfirm
                resturantName={findResturant?.title}
                dateSelected={selectedTime.AllAvaible}
                timeSelected={selectedTime?.timerSelected}
                guessNum={selectedTime?.guessNumber}
            /> */}
        </Fragment>)
}
export default SecondTimeAvaiable;