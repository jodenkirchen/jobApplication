import React, { useState } from 'react';
function Content() {
    return (

        <div id="introWrapper" className="introHidden section">
            {/* <svg id="introCircle" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="15"/>
                </svg> */}

            <div id="intro">
                <div id="welcome" className="introItem">
                    <div id="introBackground"></div>
                    <img id="me" src="/media/me.jpg"></img>
                    <div id="welcomeText">
                        Jan Odenkirchen<br />
                        <div id="welcomeTextJob">
                            Webdeveloper<br />
                            Developer</div>
                    </div>
                </div>

            </div>

            <div id="arrowIntro"></div>
        </div>
    )
}

export default Content;