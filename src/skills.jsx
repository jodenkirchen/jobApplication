import React, { Component } from 'react';

function Skills() {
    return (
        <div id="skillsWrapper" className="introHidden section">
            <div id="upperWaveContainer">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                </svg>
            </div>
            <div id="skillTextContainer">
                <div id="webDevelopment">
                    <h2>Web&nbsp;Development&nbsp;&amp;&nbsp;Design</h2>
                    <div className="skillText">
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Gimp</li>
                            <li>Inkscape</li>
                            <li>Figma</li>
                        </ul>

                    </div>
                </div>
                <div id="softwareDevelopment">
                    <h2>Software&nbsp;Development&nbsp;&amp;&nbsp;Databases</h2>
                    <div className="skillText">
                        <ul>
                            <li>C&#35;</li>
                            <li>Visual&nbsp;Basic&nbsp;&amp;&nbsp;VBA</li>
                            <li>Java</li>
                            <li>Fortran&nbsp;77</li>
                            <li>SQL</li>
                            <li>Access</li>
                        </ul>

                    </div>
                </div>
                <div id="languages">
                    <h2>Languages</h2>
                    <ul>
                        <li>German&nbsp;&minus;&nbsp;native&nbsp;speaker</li>
                        <li>English&nbsp;&minus;&nbsp;near&nbsp;native&nbsp;level</li>
                        <li>Dutch&nbsp;&minus;&nbsp;basic&nbsp;level</li>
                        <li>Norwegian&nbsp;&minus;&nbsp;basic&nbsp;level</li>
                    </ul>
                </div>
            </div>
            <div id="lowerWaveContainer">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Skills;