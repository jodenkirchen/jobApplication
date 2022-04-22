import React from 'react';
function Timeline() {
    return (
        <div id="timelineWrapper" className="introHidden section">
            <div id="tlHeading" className="sectionHeading highlight">
                <h1>Timeline</h1>
            </div>
            <div className="tlContainer">
                <div className="tlContent tlLeft highlight">
                    2014
                </div>
                <div className="tlTextRight">
                    <span className="highlight">Vocational School Degree</span><br /><span className="highlight">Software Development</span>&#044;<br />Rhein-Maas Berufskolleg&#044;<br />Kempen&#044;<br />Germany
                    <br />
                    <br />
                    <span className="highlight">Software Developer</span>&#044;<br />SMS Meer GmbH&#044;<br />M&ouml;nchengladbach&#044;<br />Germany&#044;<br />&asymp; 14&#044;000 employees
                </div>
            </div>
            <div className="tlContainer">
                <div className="tlContent tlLeft highlight">
                    2018
                </div>
                <div className="tlTextRight">
                    <span className="highlight">Frontend Developer</span>&#044;<br />kasse 9 interaktiv e&#046;K&#046;&#044;<br />Essen&#044;<br />Germany&#044;<br />&asymp; 20 employees
                </div>
            </div>
            <div className="tlContainer">
                <div className="tlContent tlLeft highlight">
                    2019
                </div>
                <div className="tlTextRight">
                    <span className="highlight">Fullstack Developer</span>&#044;<br />Magna Steyr Fuel Systems GmbH&#044;<br />Grevenbroich&#044;<br />Germany&#044;<br />&asymp; 160&#044;000 employees
                </div>
            </div>
            <div id="tlLastEntry" className="tlContainer">
                <div className="tlContent tlLeft highlight">
                    2021
                </div>
                <div className="tlTextRight">
                    <span className="highlight">Bachelor of Science, Data Science<br />&#040;In progress&#041;</span>,<br />International University of Applied Sciences,<br />Distance Learning
                </div>
            </div>

        </div>
    );
}

export default Timeline;