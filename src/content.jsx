import React, {useState} from 'react';
function Content() {
    return (
        <div id="contentWrapper" className="introHidden section">
           
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
                
            </div>
            </div>

            <div id="arrowIntro"></div>  
        </div>
    )
}

export default Content;