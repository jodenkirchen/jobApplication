import React, { Component, useState, useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills() {
    var screenWidth = window.innerWidth;
    var isMobile = useState(true);
    const waveRef = useRef();
    const skillsWrapperRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    const handleWindowResize = useCallback(event => {
        screenWidth = window.innerWidth;
        skillsWrapperOpacityMatch();

    }, []);


    function skillsWrapperOpacityMatch() {

        if (getComputedStyle(skillsWrapperRef.current).opacity == 1 && window.innerWidth >= 1024) {

            //remove current style values and tweens so it doenst crash on rescale
            gsap.killTweensOf(waveRef.current);
            gsap.killTweensOf("#skillsWrapper #skillTextContainer");
            gsap.killTweensOf("#skillsHeading");
            gsap.killTweensOf(".skillSection");
            gsap.killTweensOf("#skillsWrapper #skillTextContainer .skillText");

            const skillSections = document.getElementsByClassName("skillSection");
            const skillTexts = document.getElementsByClassName("skillTexts");

            waveRef.current.removeAttribute("style");
            document.getElementById("skillTextContainer").removeAttribute("style");
            document.getElementById("skillsHeading").removeAttribute("style");
            for (var i = 0; i < skillSections.length; i++) {
                skillSections[i].removeAttribute("style");
            }
            for (var x = 0; x < skillTexts.length; i++) {
                skillTexts[x].removeAttribute("style");
            }


            const endOffsetWindow = (window.innerHeight * 0.35);
            const endOffsetBox = (window.innerHeight * 0.4);
            const startOffsetBoxText = (window.innerHeight * 0.45);

            gsap.to(waveRef.current, {
                scrollTrigger: {
                    trigger: "#upperWave",
                    start: "" + startOffsetBoxText + " bottom",
                    end: "" + endOffsetBox + " " + endOffsetWindow,
                    scrub: true
                },
                fill: "#5a4f46",
                duration: 10
            });
            gsap.to("#skillsWrapper #skillTextContainer", {
                scrollTrigger: {
                    trigger: "#upperWave",
                    start: "" + startOffsetBoxText + " bottom",
                    end: "" + endOffsetBox + " " + endOffsetWindow,
                    scrub: true
                },
                color: "#c7ff00"
            });
            gsap.to("#skillsHeading", {
                scrollTrigger: {
                    trigger: "#upperWave",
                    start: "" + startOffsetBoxText + " bottom",
                    end: "" + endOffsetBox + " " + endOffsetWindow,
                    scrub: true
                },
                color: "#c7ff00"
            });
            gsap.to("#skillsWrapper #skillTextContainer .skillText", {
                scrollTrigger: {
                    trigger: "#upperWave",
                    start: "" + startOffsetBoxText + " bottom",
                    end: "" + endOffsetBox + " " + endOffsetWindow,
                    scrub: true
                },
                color: "#c7ff00",
            });
            gsap.to(".skillSection", {
                scrollTrigger: {
                    trigger: "#upperWave",
                    start: "" + startOffsetBoxText + " bottom",
                    end: "" + endOffsetBox + " " + endOffsetWindow,
                    scrub: true
                },
                marginLeft: (window.innerWidth * 0.25),
                marginRight: (window.innerWidth * 0.25),
                marginBottom: 60,
                borderRadius: 25,
                boxShadow: "10px 7px #00000017",
                backgroundColor: "#5a4f45"
            });
        }

        if (getComputedStyle(skillsWrapperRef.current).opacity == 1 && window.innerWidth < 1024) {
            //remove the scroll animation if already applied and remove the current styles applied by gsap
            gsap.killTweensOf(waveRef.current);
            gsap.killTweensOf("#skillsWrapper #skillTextContainer");
            gsap.killTweensOf("#skillsHeading");
            gsap.killTweensOf(".skillSection");
            gsap.killTweensOf("#skillsWrapper #skillTextContainer .skillText");

            const skillSections = document.getElementsByClassName("skillSection");
            const skillTexts = document.getElementsByClassName("skillTexts");

            waveRef.current.removeAttribute("style");
            document.getElementById("skillTextContainer").removeAttribute("style");
            document.getElementById("skillsHeading").removeAttribute("style");
            for (var i = 0; i < skillSections.length; i++) {
                skillSections[i].removeAttribute("style");
            }
            for (var x = 0; x < skillTexts.length; i++) {
                skillTexts[x].removeAttribute("style");
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        if (screenWidth >= 1024) {
            console.log();

        }
        skillsWrapperRef.current.addEventListener("animationend", skillsWrapperOpacityMatch);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [handleWindowResize]);

    return (
        <div id="skillsWrapper" className="introHidden section" ref={skillsWrapperRef}>
            <div id="skillsHeading" className="sectionHeading highlight">
                <h1>Skills</h1>
            </div>
            <div id="upperWaveContainer">
                <svg id="upperWave" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" ref={waveRef}>
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                </svg>
            </div>
            <div id="skillTextContainer">
                <div id="webDevelopment" className="skillSection">
                    <h3>Web&nbsp;Development&nbsp;&amp;&nbsp;Design</h3>
                    <div className="skillText">
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Gimp</li>
                            <li>Inkscape</li>
                            <li>Figma</li>
                            <li>Git/GitHub</li>
                        </ul>

                    </div>
                </div>
                <div id="softwareDevelopment" className="skillSection">
                    <h3>Software&nbsp;Development&nbsp;&amp;&nbsp;Databases</h3>
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
                <div id="languages" className="skillSection">
                    <h3>Languages</h3>
                    <div className="skillText">
                        <ul>
                            <li>German&nbsp;&minus;&nbsp;native&nbsp;speaker</li>
                            <li>English&nbsp;&minus;&nbsp;near&nbsp;native&nbsp;level</li>
                            <li>Dutch&nbsp;&minus;&nbsp;basic&nbsp;level</li>
                            <li>Norwegian&nbsp;&minus;&nbsp;basic&nbsp;level</li>
                        </ul>
                    </div>

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