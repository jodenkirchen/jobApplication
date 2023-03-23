//script imports
//import './logochecker';
import React from 'react';
import Logo from './logo.jsx';
import Intro from './intro.jsx';
import Skills from './skills.jsx';
import Navigation from './navigation.jsx';
import Timeline from './timeline.jsx';
import Footer from './footer.jsx';
//css imports
import './introLogo.css';
import './main.css';
import './intro.css';
import './skills.css';
import './timeline.css';
import './footer.css';
import './mediaQueries.css';

function App() {
  console.log("test");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  document.title = "Lara Odenkirchen";

  return (
    <div>
      <Logo />
      <Navigation />
      <Intro />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
}
export default App; 