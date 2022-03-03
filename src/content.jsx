import React, {useState} from 'react';
function Content() {
    const [active, setActive] = useState(false);

    return (
        <div id="contentWrapper">
            <div id="burgerMenu" onClick={() => setActive(!active)}>
                <div id="firstLine" className={active? "line active" : "line"}></div>
                <div id="secondLine" className={active? "line active" : "line"}></div>
                <div id="thirdLine" className={active? "line active" : "line"}></div>
            </div>
        </div>
    )
}

export default Content;