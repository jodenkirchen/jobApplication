import React, {useState} from 'react';
function Content() {
    const [burgerActive, setBurgerActive] = useState(false);

    function  burgerSwap() {
        document.body.classList.toggle("burgerActive");
    }

    return (
        <div id="contentWrapper" className="introHidden">
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
            <div id="introWrapper">
            <div id="intro">
                <div id="welcome" className="introItem">
                <img id="me" src="/media/me.jpg"></img>
                    <div id="welcomeText">
                        Jan Odenkirchen<br />
                        <div id="welcomeTextJob">
                            Webdeveloper<br />
                            Developer</div>
                        </div>      
                </div>  
                <div id="arrowIntro"></div>  
            </div>
            </div>

            <div id="timeline"></div>
        </div>
    )
}

export default Content;