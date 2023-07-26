import React from 'react';

import './App.css'
import './index.css'
import Navbar from './components/navbar/Navbar';
import Cta from './components/cta/Cta.jsx';
import Brand from './components/brand/Brand';
import Header from './containers/header/Header.jsx'
import Blog from './containers/blog/Blog.jsx'
import Footer from './containers/footer/Footer.jsx';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3.jsx';
import Features from './containers/features/Features.jsx';
import Possibility from './containers/possibility/Possibility.jsx';
const App = () => {
  
return (
<div className='App'>

      <div className='gradient__bg'>
      
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
    
    
  );
  
}


export default App;

