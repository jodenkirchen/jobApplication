import React, { } from 'react';

const footerSection = React.createRef();

function Footer() {

    return (
        <footer ref={footerSection} className="introHidden">
            <div id="footerText">Follow me on</div>
            <a href="https://github.com/jodenkirchen/jobApplication" target="_blank" rel="noopener noreferrer"><img src="/media/GitHub_logo.png" alt="GitHubImage"></img></a>
            <div id="copyright" className="highlight">&#169;Lara Odenkirchen</div>
        </footer>
    );

}
export default Footer;
export { footerSection };