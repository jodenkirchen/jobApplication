//script imports
//import './logochecker';
import React from 'react';
import Logo from './logo'; 
import Content from './content.jsx';
import Skills from './skills.jsx';
import Navigation from './navigation.jsx';
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
    </div>
    
  );
}
export default App; 