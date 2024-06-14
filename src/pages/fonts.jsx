import './fonts.css';
import DownloadButton from '../font-awesome/regular/download.svg'
import { useState } from 'react';

export default function Fonts() {
  return (
    <div className="fontsPage" page="top">
      <h2>My favorite fonts</h2>
      <a href='/GavinsFontSelection.zip'><button><img src={DownloadButton}/>Download my fontpack</button></a>
      <div className='fonts'>
        <a href="https://fonts.google.com/specimen/Source+Code+Pro" style={{fontFamily:"source code pro"}}>Source Code Pro</a>
        <a href="https://fonts.google.com/specimen/Rubik" style={{fontFamily:"Rubik"}}>Rubik</a>
        <a href="https://fonts.google.com/specimen/Poppins" style={{fontFamily:"Poppins"}}>Poppins</a>
        <a href="https://fonts.google.com/specimen/Patrick+Hand" style={{fontFamily:"Patrick Hand"}}>Patrick Hand</a>
        <a href="https://fonts.google.com/specimen/Nunito+Sans" style={{fontFamily:"Nunito Sans"}}>Nunito Sans</a>
        <a href="https://fonts.google.com/specimen/Noto+Serif" style={{fontFamily:"Noto Serif"}}>Noto Serif</a>
        <a href="https://fonts.google.com/specimen/Montserrat" style={{fontFamily:"Montserrat"}}>Montserrat</a>
        <a href="https://fonts.google.com/specimen/Comfortaa" style={{fontFamily:"Comfortaa"}}>Comfortaa</a>
      </div>
    </div>
  );
}
