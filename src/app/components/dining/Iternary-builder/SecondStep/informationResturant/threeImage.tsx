import Image from "next/image";
import { Fragment } from "react";
import image1 from "../../../../../../../public/images/image1-res.png"
function ThreeImage() {
    return <Fragment>
        <section className="three-column">
            <div className="container">
                <div className="three-column-positions row row-cols-1 row-cols-md-3 justify-content-center">
                    <div className="three-column-image-holder col">
                        <Image src={image1} width={300} height={150} alt="image1" className="three-column-image" />
                    </div>
                    <div className="three-column-image-holder col">
                        <Image src={image1} width={300} height={150} alt="image1" className="three-column-image" />
                    </div>
                    <div className="three-column-image-holder col">
                        <Image src={image1} width={300} height={150} alt="image1" className="three-column-image" />
                    </div>

                </div>
            </div>
        </section>
    </Fragment>
}
export default ThreeImage;