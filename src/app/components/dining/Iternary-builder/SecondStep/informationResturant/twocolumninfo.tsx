import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import placeholder from "../../../../../../../public/images/image1-res.png"
const TwocolumnInfo = () => {
    return (<Fragment>
        <section className="two-column">
            <div className="container">
                <h3 className="two-column-titlemn mb-5 text-center">In the Kitchen with mark LoRusso</h3>
                <div className="row row-cols-1 row-cols-lg-2 justify-content-center  align-items-start mt-5">
                    <div className="col">
                        <Image src={placeholder} width={500} height={300} className="two-column-image" alt="placeholder" />
                    </div>
                    <div className="col">
                        <div className="two-column-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla odit aliquid laborum
                                aliquam delectus, aperiam vitae aspernatur rerum illum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>)
}
export default TwocolumnInfo;