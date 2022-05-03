import React, { } from 'react';

const footerSection = React.createRef();

function Footer() {

    return (
        <footer ref={footerSection} className="introHidden">
            <div id="footerText">Follow me on</div>
            <img src="/media/GitHub_logo.png" alt="GitHubImage"></img>
            <div id="copyright" className="highlight">&#169;Jan Odenkirchen</div>
        </footer>
    );

}
export default Footer;
export { footerSection };