"use client";
import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation'
import OptionReserve from "./optionsReserve";
import MenuList from "./menuList";
import InfoList from "./infoList";
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const AddReservationConfirm = ({ resturantName, dateSelected, timeSelected, guessNum }: {
    resturantName: string, dateSelected: Date, timeSelected: string, guessNum: string
}) => {
    const router = useRouter();
    const [acitveNav, setActiveNav] = useState("option");
    function closeButton() {
        setModalView(false);
        router.push("/dining/resevations")

    }
    console.log(acitveNav)

    const [modalView, setModalView] = useState(true)
    const dateFormat: string = `${dayNames[dateSelected.getDay()]}, ${month[dateSelected.getMonth()]} ${dateSelected.getDate()}`
    return (<Fragment>
        <section className={`modal-add-reservation  ${modalView ? "" : "closing"}`}>
            <div className="container">
                <div className="header-title">
                    <h1 className="text-center selected-resturant text-center text-lg-left">
                        {resturantName}
                    </h1>
                    <button className="button-add d-none d-lg-block btn-primary border border-0">
                        ADD RESERVATION
                    </button>
                </div>
                <button className={`close-model d-lg-none`} onClick={closeButton}>
                    <span><i className="bi bi-x-lg"></i></span>
                </button>
                <div className="d-flex flex-column flex-lg-row-reverse justify-content-lg-between nav-info-bar">
                    <div className="info-reservation d-flex justify-content-evenly align-item-center">
                        <div className="date-selected">
                            <span className="me-2 fs-6"><i className="bi bi-calendar"></i></span>
                            {dateFormat}
                        </div>
                        <div className="date-selected">
                            <span className="me-2 fs-6"><i className="bi bi-stopwatch"></i></span>
                            {timeSelected} PM
                        </div>
                        <div className="date-selected">
                            <span className="me-2 fs-5"><i className="bi bi-person"></i></span>
                            {guessNum.replace(/\D/g, "")} People
                        </div>
                    </div>
                    <div className="nav-option">
                        <div className="nav-option-list">
                            <div className="option-list">
                                <p className={`option-para ${acitveNav == "option" ? "active" : ""}`} onClick={() => setActiveNav("option")}>options</p>
                            </div>
                            <div className="menu-list">
                                <p className={`option-para ${acitveNav == "menu" ? "active" : ""}`} onClick={() => setActiveNav("menu")}>menu</p>
                            </div>
                            <div className="info-list">
                                <p className={`option-para ${acitveNav == "info" ? "active" : ""}`} onClick={() => setActiveNav("info")}>info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="time-menu-info-list">
                {acitveNav == "option" && <OptionReserve />}
                {acitveNav == "menu" && <MenuList />}
                {acitveNav == "info" && <InfoList />}
            </div>
        </section>

    </Fragment>)
}
export default AddReservationConfirm;