import React, { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Timeline() {

    const timelineWrapperRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    const handleWindowResize = useCallback(event => {
        timelineWrapperOpacityMatch();

    }, []);


    function timelineWrapperOpacityMatch() {
        // eslint-disable-next-line
        if (getComputedStyle(timelineWrapperRef.current).opacity == 1 && window.innerWidth >= 1024) {
            //remove current style values and tweens so it doenst crash on rescale
            gsap.killTweensOf(".tlContent");
            gsap.killTweensOf(".tlTextRight");

            const timelineContents = document.getElementsByClassName("tlContent");
            const timelineTextsRight = document.getElementsByClassName("tlTextRight");

            for (var i = 0; i < timelineContents.length; i++) {
                timelineContents[i].removeAttribute("style");
                gsap.killTweensOf(timelineContents[i]);
            }
            for (var x = 0; x < timelineTextsRight.length; x++) {
                timelineTextsRight[x].removeAttribute("style");
                gsap.killTweensOf(timelineTextsRight[x]);
            }

            gsap.from(".tlContent", {
                scrollTrigger: {
                    trigger: "#timelineWrapper",
                    toggleActions: "restart none none reset",
                    start: "-100 center",
                },
                duration: 1,
                marginLeft: "-" + (window.innerWidth * 0.6)
            });
            gsap.from(".tlTextRight", {
                scrollTrigger: {
                    trigger: "#timelineWrapper",
                    toggleActions: "restart none none reset",
                    start: "-100 center",
                },
                duration: 3,
                opacity: 0
            });


        }
        // eslint-disable-next-line
        if (getComputedStyle(timelineWrapperRef.current).opacity == 1 && window.innerWidth < 1024) {
            ScrollTrigger.getAll('myID').forEach(st => st.kill());
            //remove the scroll animation if already applied and remove the current styles applied by gsap
            gsap.killTweensOf(".tlContent");
            gsap.killTweensOf(".tlTextRight");

            const timelineContents = document.getElementsByClassName("tlContent");
            const timelineTextsRight = document.getElementsByClassName("tlTextRight");

            for (var p = 0; p < timelineContents.length; p++) {
                timelineContents[p].removeAttribute("style");
                gsap.killTweensOf(timelineContents[p]);
            }
            for (var q = 0; q < timelineTextsRight.length; q++) {
                timelineTextsRight[q].removeAttribute("style");
                gsap.killTweensOf(timelineTextsRight[q]);
            }

        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        timelineWrapperRef.current.addEventListener("animationend", timelineWrapperOpacityMatch);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [handleWindowResize]);

    return (
        <div id="timelineWrapper" className="introHidden section" ref={timelineWrapperRef}>
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
                    2023
                </div>
                <div className="tlTextRight">
                    <span className="highlight">For you&#63;</span>
                </div>
            </div>

        </div>
    );
}

export default Timeline;