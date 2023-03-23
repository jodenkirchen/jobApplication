import React, { } from 'react';
function Content() {
    return (

        <div id="introWrapper" className="introHidden section">
            {/* <svg id="introCircle" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="15"/>
                </svg> */}

            <div id="intro">
                <div id="welcome" className="introItem">
                    <div id="introBackground"></div>
                    <img id="me" src="/media/me.jpg" alt="ImageOfMe"></img>
                    <div id="welcomeText">
                        Lara Odenkirchen<br />
                        <div id="welcomeTextJob">
                            Web developer&#44;<br />
                            Web designer&#44;<br />
                            Developer</div>
                    </div>
                </div>
                <div id="greetingsText">
                    <h2>Hi&#33; I&#39;m Lara.</h2>Nice to have you here&#33;<br />
                    I&#39;m a web and software developer from Germany&#44; with my main focus on front end development.
                </div>
                <div id="greetingsButton">
                    <div id="greetingsButtonLabel">
                        About me
                    </div>
                </div>
                <div id="greetingsBackground"></div>

            </div>

            <div id="arrowIntro"></div>
        </div>
    )
}

export default Content;