import React, { useState } from 'react';
import {Link} from "react-scroll";

function Navigation() {

    const [burgerActive, setBurgerActive] = useState(false);

    function burgerSwap() {
        document.body.classList.toggle("burgerActive");
    }
    return (
        <div className="introHidden">
            <div id="burgerMenu" onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>
                <div id="firstLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="secondLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="thirdLine" className={burgerActive ? "line active" : "line"}></div>
            </div>
            <div id="nav" className={burgerActive ? "active" : null}>
                <li className="navItem"><Link to="contentWrapper" spy={true} smooth={true} offset={50} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Home</Link></li>
                <li className="navItem"><Link to="skillsWrapper" spy={true} smooth={true} offset={50} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Skills</Link></li>
                <li className="navItem"><Link to="timelineWrapper" spy={true} smooth={true} offset={50} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Timeline</Link></li>
            </div>
        </div>

    );
}

export default Navigation;