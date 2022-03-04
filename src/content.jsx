import React, {useState} from 'react';
function Content() {
    const [burgerActive, setBurgerActive] = useState(false);
    
  function  burgerSwap() {
        document.body.classList.toggle("burgerActive");
      }

    return (
        <div id="contentWrapper">
            <div id="burgerMenu" onClick={() => { burgerSwap(); setBurgerActive(!burgerActive)}}>
                <div id="firstLine" className={burgerActive? "line active" : "line"}></div>
                <div id="secondLine" className={burgerActive? "line active" : "line"}></div>
                <div id="thirdLine" className={burgerActive? "line active" : "line"}></div>
            </div>
            <nav className={burgerActive? "active" : null}>
                <li className="navItem"><span>Home</span></li>
                <li className="navItem"><span>About</span></li>
                <li className="navItem"><span>Shop</span></li>
            </nav>
            <div id="intro">
                <div id="welcome" class="introItem">
                    Hi&#33; I&#039;m  Jan  <br />
                    Developer&#x2f;Webdeveloper
                </div>    
            </div>
        </div>
    )
}

export default Content;