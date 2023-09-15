import Link from "next/link";
import { Fragment } from "react";
import TwocolumnInfo from "./twocolumninfo";
import ThreeImage from "./threeImage";

const InfoRes = () => {
    return (<Fragment>
        <section className="resturant">
            <div className="container">
                <div className="resturant-information">
                    <p className="resturant-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                        beatae aliquid aut quam saepe sunt quibusdam unde numquam quae,
                        dicta modi illum ex reiciendis ullam voluptatem id labore deleniti maiores.
                        Autem, eos. Asperiores quae facilis officia vel esse sed autem laborum quaerat!
                        Assumenda fugiat, libero non nihil autem, placeat quibusdam in excepturi nulla
                        expedita necessitatibus inventore beatae, sunt rerum explicabo. Neque architecto
                        facilis praesentium, pariatur error earum illo laboriosam fuga.
                    </p>
                </div>
                <div className="resturant-source row row-cols-1 row-cols-md-2">
                    <div className="menu-page col">
                        <div className="menu">
                            <div className="menu-icon">
                                <i className=" bi bi-egg-fried"></i>
                            </div>
                            <div className="menu-title">
                                <h2 className="text-black">Menu</h2>
                            </div>
                        </div>
                        <div className="menu-list">
                            <div className="main-menu">
                                {/* <button className="btn btn-link" onClick={() => setMenuType(true)}> Main Menu</button> */}
                            </div>
                            <div className="wine-menu">
                                {/* <button className="btn btn-link" onClick={() => setMenuType(false)}> Wine Menu</button> */}
                            </div>
                        </div>
                    </div>
                    <div className=" menu-page hours col">
                        <div className="hours-open menu">
                            <div className="hours-icon">
                                <i className="bi bi-clock text-center"></i>
                            </div>
                            <div className="hours-title">
                                <h2 className="text-black">Hours of Operation</h2>
                            </div>
                        </div>
                        <div className="hours-list">
                            <div className="hours-days">
                                <p className="hours-bolder">Sunday - Thurday:</p>
                            </div>
                            <div className="hours-time">
                                <p>5:30pm - 10:00pm</p>
                            </div>
                        </div>
                        <div className="hours-list line-height-lower">
                            <div className="hours-days">
                                <p className="hours-bolder">
                                    Friday - Saturday:</p>
                            </div>
                            <div className="hours-time ">
                                <p>5:30pm - 10:00pm</p>
                            </div>
                        </div>
                    </div>
                    <div className=" menu-page hours col">
                        <div className="hours-open menu">
                            <div className="hours-icon">
                                <i className="bi bi-person-gear"></i>
                            </div>
                            <div className="hours-title">
                                <h2 className="text-black">Dress code</h2>
                            </div>
                        </div>
                        <div className="hours-list">
                            <div className="hours-time w-75">
                                <p className="qouted-text text-center">
                                    <span>Upscale casual chic. </span>
                                    <Link className="btn-link " href={"#"}>Learn More</Link>
                                    <span> children under 5 are not permitted</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" menu-page hours col">
                        <div className="hours-open menu">
                            <div className="hours-icon">
                                <i className="bi bi-chat-left-text"></i>
                            </div>
                            <div className="hours-title">
                                <h2 className="text-black">Review</h2>
                            </div>
                        </div>
                        <div className="hours-list">
                            <div className="hours-time ">
                                <p className="qouted-text text-center ">
                                    "For a real steak lover, SW stands alone as a must-visit."
                                </p>
                                <p className="text-center line-height-lower ">
                                    - Forbes
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="phone-number d-flex justify-content-center ">
                    <p className="me-2">Phone</p>
                    <Link href={"#"} className="btn-link ">+1 (702) 770-3325</Link>
                </div>
            </div>
        </section>
        <TwocolumnInfo />
        <ThreeImage />
    </Fragment>)
}
export default InfoRes;
