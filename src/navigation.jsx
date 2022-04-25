import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-scroll";
import { footerSection } from './footer.jsx';

function Navigation() {

    const [burgerActive, setBurgerActive] = useState(false);
    var offSet = 0;
    var isMobile = useState(true);
    // const lineActive = isMobile ? 'line active' : 'line';
    const lineClick = burgerActive ? "line active" : "line";

    //check if the burger is currently active and and deactivate if so        
    const handleWindowResize = useCallback(event => {
        if (window.innerWidth < 1024) {
            setBurgerActive(burgerActive);
        }
        offSet = -48;
        var sections = document.getElementsByClassName("section");
        if (sections[0].classList.contains("menuActive")) {
            footerSection.current.classList.toggle("menuActive");

            for (var i = 0; i < sections.length; i++) {
                sections[i].classList.toggle("menuActive");
            }
            document.getElementById("nav").classList.toggle("active");
            document.body.classList.toggle("burgerActive");
        }

    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

    //offset for regular menu
    if (window.innerWidth >= 1024) {
        offSet = -48;
    }

    function burgerSwap() {
        if (window.innerWidth < 1024) {
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
                <div id="firstLine" className={`${lineClick}`}></div>
                <div id="secondLine" className={`${lineClick}`}></div>
                <div id="thirdLine" className={`${lineClick}`}></div>
            </div>
            <div id="nav">
                <li className="navItem"><Link to="introWrapper" spy={true} smooth={true} offset={offSet} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }} >Home</Link></li>
                <li className="navItem"><Link to="skillsWrapper" spy={true} smooth={true} offset={offSet} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Skills</Link></li>
                <li className="navItem"><Link to="timelineWrapper" spy={true} smooth={true} offset={offSet} duration={500} onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>Timeline</Link></li>
            </div>
        </div>

    );
}

export default Navigation;