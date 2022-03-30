//script imports
//import './logochecker';
import React from 'react';
import Logo from './logo'; 
import Content from './content.jsx';
import Skills from './skills.jsx';
import Navigation from './navigation.jsx';
import Timeline from './timeline.jsx';
//css imports
import './main.css';
import './introLogo.css';



function App(){
  return(
    <div>
      <Logo />
      <Navigation />
      <Content />
      <Skills />
      <Timeline />
    </div>
    
  );
}
export default App; 