//script imports
//import './logochecker';
import React from 'react';
import Logo from './logo'; 
import Content from './content.jsx';
import Skills from './skills.jsx';
import Navigation from './navigation.jsx';
import Timeline from './timeline.jsx';
import Footer from './footer.jsx';
//css imports
import './introLogo.css';
import './main.css';
import './skills.css';
import './timeline.css';
import './footer.css';
import './mediaQueries.css';


function App(){
  return(
    <div>
      <Logo />
      <Navigation />
      <Content />
      <Skills />
      <Timeline />
      <Footer />
    </div>
    
  );
}
export default App; 