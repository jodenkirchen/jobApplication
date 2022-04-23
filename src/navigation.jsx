import React, { useState } from 'react';
import {Link} from "react-scroll";
import {footerSection} from './footer.jsx';

function Navigation() {

    const [burgerActive, setBurgerActive] = useState(false);

    function burgerSwap() {
        if(window.innerWidth<1024){
            document.body.classList.toggle("burgerActive");
            var sections = document.getElementsByClassName("section");
            footerSection.current.classList.toggle("menuActive");
            document.getElementById("nav").classList.toggle("active");
    
            for (var i = 0; i < sections.length; i++) {
                sections[i].classList.toggle("menuActive");
              }
        }
 
    }

    return (
        <div id="menuWrapper" className="introHidden">
            <div id="burgerMenu" onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>
                <div id="firstLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="secondLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="thirdLine" className={burgerActive ? "line active" : "line"}></div>
            </div>
            <div id="nav">
                <li className="navItem"><Link to="contentWrapper" spy={true} smooth={true} offset={0} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Home</Link></li>
                <li className="navItem"><Link to="skillsWrapper" spy={true} smooth={true} offset={0} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Skills</Link></li>
                <li className="navItem"><Link to="timelineWrapper" spy={true} smooth={true} offset={0} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Timeline</Link></li>
            </div>
        </div>

    );
}

export default Navigation;