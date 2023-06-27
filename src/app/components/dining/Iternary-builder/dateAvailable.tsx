import { Fragment, use, useEffect, useState } from "react";
import DateCarousel from "./date-carsoule-format";
function DateAvailable({ selected }: { selected: (data: string) => void }) {
    const [dateAvai, setDateAvai] = useState("")
    function handlerSelected(data: string) { // receive data from the date-carsoule-format.tsx of the clicked date 
        setDateAvai(data);
    }
    useEffect(() => {
        selected(dateAvai)
    }, [dateAvai])

    return (<Fragment>
        <section className="reservationBooking">
            <div className="holder-bucket">
                <div className="left-vector-img">
                </div>
                <div className="right-vector-img">
                </div>
                <div className="container">
                    <h1 className="reason-title">Elevate your Stay</h1>
                    <p className="reason-description">Reserve Our Exclusive Experiences</p>
                    <div className="date-carousel">
                        <div className="container">
                            <DateCarousel selectedDates={handlerSelected} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom-holder"></div>
        </section>
    </Fragment>)
}
export default DateAvailable;