import './experience.css';
import { useState } from 'react';
import Typescript from '../Typescript.svg'
import Python from '../Python.svg'
import Java from '../Java.svg'
import HTML from '../HTML.png'
import CSS from '../CSS.png'
import React from '../React.png'
import JS from '../JS.png'
import MDB from '../MDB.png'
import Bootstrap from '../Bootstrap.png'
import EJS from '../EJS.png'
import NJS from '../NJS.png'
import Scratch from '../Scratch.png'

export default function Experience() {
  return (
    <div className="expPage" page="top">
      <h2 style={{fontFamily:"Rubik"}}>Experience</h2>
      <div className="years">I have been coding for <span>{(new Date()).getFullYear() - 2019} years</span></div>
      <div className="years">I have been programming(like scratch and code.org) for <span>{(new Date()).getFullYear() - 2017} years</span></div>
      <div>
        <h3 style={{fontFamily:"Montserrat"}}>I know</h3>
        <div className="langs">
          <img src={Typescript} alt='Typescript' />
          <img src={Python} alt='Python' />
          <img src={Java} alt='Java' />
          <img src={React} alt='React' />
          <img src={HTML} alt='HTML'/>
          <img src={CSS} alt='CSS'/>
          <img src={JS} style={{borderRadius:"5px"}} alt='Javascript' />
          <img src={MDB} alt='MongoDB'/>
          <img src={EJS} alt='ExpressJS'/>
          <img src={Bootstrap} alt='Bootstrap' />
          <img src={Scratch} alt='Scratch'/>
          <img src={NJS } alt='NodeJS' />
        </div>
      </div>
      
      
    </div>
  );
}
