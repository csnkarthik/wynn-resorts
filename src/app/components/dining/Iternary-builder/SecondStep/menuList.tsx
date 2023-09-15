import { Fragment, useState } from "react";
import MainMenu from "./menu-type/mainMenu";
import WineMenu from "./menu-type/wineMenu";
function MenuList() {
    const [menuType, setMenuType] = useState(true)

    return <Fragment>
        <div className="container">
            <section className="menu-page">
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
                        <button className="btn btn-link" onClick={() => setMenuType(true)}> Main Menu</button>
                    </div>
                    <div className="wine-menu">
                        <button className="btn btn-link" onClick={() => setMenuType(false)}> Wine Menu</button>
                    </div>
                </div>
            </section>
            {menuType && <MainMenu />}
            {!menuType && <WineMenu />}

        </div>
        
    </Fragment>
}
export default MenuList;