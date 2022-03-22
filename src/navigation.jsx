import React, { useState } from 'react';


function Navigation() {

    const [burgerActive, setBurgerActive] = useState(false);

    function burgerSwap() {
        document.body.classList.toggle("burgerActive");
    }
    return (
        <div id="menuWrapper" className="introHidden">
            <div id="burgerMenu" onClick={() => { burgerSwap(); setBurgerActive(!burgerActive) }}>
                <div id="firstLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="secondLine" className={burgerActive ? "line active" : "line"}></div>
                <div id="thirdLine" className={burgerActive ? "line active" : "line"}></div>
            </div>
            <nav className={burgerActive ? "active" : null}>
                <li className="navItem"><span>Home</span></li>
                <li className="navItem"><span>About</span></li>
                <li className="navItem"><span>Shop</span></li>
            </nav>
        </div>

    );
}

export default Navigation;