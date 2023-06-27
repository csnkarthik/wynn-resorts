import { Fragment, useState } from "react";

function OptionReserve() {
    const [outdoorAvai, setOutDoorAvai] = useState(false); /// out door availabel will be true
    const [radioSelected, setRadioSelected] = useState("")
    console.log(("Lounge Tall Table").replaceAll(" ", ""))
    return <Fragment>
        <div className="container">
            <div className="container">
                <div className="select-hour-availabel mt-4 ">
                    <button className="btn btn-primary">7:30</button>
                    <button className="btn btn-secondary">8:30</button>
                    <button className="btn btn-disabled"></button>
                    <button className="btn btn-disabled"></button>
                    <button className="btn btn-disabled"></button>
                    <button className="btn btn-disabled"></button>
                </div>
            </div>
            <h3 className="text-left seating-position">Seating options</h3>
            <div className="option">
                <div className="accordion" id="accordionPanelsStay">
                    <div className="item">
                        <h3 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <span className="me-2"> <i className="bi bi-house"></i></span>
                                <span> Indoor</span>
                            </button>
                        </h3>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <h6 className="accordion-title text-capitalize">dining room</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> Standard</p>
                                    <button className={`select-radio ${("dining room").replaceAll(" ", "") == radioSelected.replaceAll(" ", "") ? "active" : ""}`} onClick={() => setRadioSelected("dining room")}>Select</button>
                                </div>
                                <hr />
                                <h6 className="accordion-title text-capitalize">Lounge Standard Table</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> Standard</p>
                                    <button className={`select-radio ${("Lounge Standard Table").replaceAll(" ", "") == radioSelected.replaceAll(" ", "") ? "active" : ""}`} onClick={() => setRadioSelected("Lounge Standard Table")} >Select</button>
                                </div>
                                <hr />
                                <h6 className="accordion-title text-capitalize">Lounge Tall Table</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> High Top</p>
                                    <button className={`select-radio ${("Lounge Tall Table").replaceAll(" ", "") == radioSelected.replaceAll(" ", "") ? "active" : ""}`} onClick={() => setRadioSelected("Lounge Tall Table")}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="accordion-header" id="panelsStayOpen-headingTwo">
                            {outdoorAvai && <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <span className="me-2"><i className="bi bi-brightness-alt-high"></i></span>
                                <span> Outdoor</span>
                            </button>}
                            {!outdoorAvai && <button className="button button-disabled d-flex justify-content-between" type="button">
                                <div>
                                    <span className="me-2 text-left"><i className="bi bi-brightness-alt-high"></i></span>
                                    <span className="text-left"> Outdoor</span>
                                </div>
                                <div>
                                    <p className="text-available"> Unavailable</p>
                                </div>
                            </button>}
                        </h3>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <h6 className="accordion-title text-capitalize">dining room</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> Standard</p>
                                    <button className="select-radio">Select</button>
                                </div>
                                <hr />
                                <h6 className="accordion-title text-capitalize">dining room</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> Standard</p>
                                    <button className="select-radio">Select</button>
                                </div>
                                <hr />
                                <h6 className="accordion-title text-capitalize">dining room</h6>
                                <div className="d-flex justify-content-between">
                                    <p className="standard-select"> Standard</p>
                                    <button className="select-radio">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-reservation d-lg-none">
                    <button className="add-reservation-button  btn btn-primary">
                        ADD RESERVATION
                    </button>
                </div>
            </div>
        </div>
    </Fragment>
}
export default OptionReserve;
