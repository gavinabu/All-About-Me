import './home.css';
import { useState } from 'react';
import Typescript from '../Typescript.svg'
import Python from '../Python.svg'
import Java from '../Java.svg'

export default function Home() {
  return (
    <div className="homePage" page="top">
      <div>
        <h2 style={{fontFamily:"Rubik"}}>About Me</h2>
        <p style={{fontFamily:"Comfortaa"}}>Hey, I'm Gavin Abu, I'm a software developer and have my own company called <a href='https://justwhatever.net'>JustWhatever</a>. I also have plenty of personal projects that I have coded. When I was little, I was always toying around with computers and seeing how things worked. My dad introduced me to scratch when I was little, and I remember I made this game where I spelled my name and when I clicked on my name it got bigger for 1 second and then returned to normal. I kept using scratch and made bad operating systems and just some cool stuff, and learned the basics of how to think like a programmer. Around 2020 I was introduced to minecraft Java, I had played the console versions forever but being able to use mods and all these cool quote on quote "Developer Features" just seemed so cool. I decided to learn how to make minecraft mods and learned Java, was it the best language to start with God no, but I got the hang of it and made some cool minecraft mods but eventually wanted to start making websites. I learned HTML and CSS, but JavaScript seemed like a big jump, so I just made a bunch of websites that did not do much. Eventually I wanted to learn how to make discord bots and decided to finally use JavaScript with DiscordJS and some tutorials(Worn off keys is amazing btw) I was all set and made some game bots but scrapped all of them and went back to making websites. I made JSocial 1.0 It was a hit with me and my friends we were on it 24/7 and never got off. It was really basic and had too many bugs to count, and eventually I took a hit for that. I stored user data In a big .json array file, and It got corrupted because 2 people send a request and edited the file at the same time. Note to self, don't use JSON as a database and MAKE BACKUPS. After that JSocial kind of fell off, and I started working on 2.0 then thought it was stupid and started 3.0 with REACT screwed it up by writing in JavaScript instead of typescript and I could not find out why it would not convert, so another rewrite came to 4.0 with a good backend using MongoDB and React. Currently, I'm working on some games with THREEJS and ElectronJS, also just working on improving some websites and I finally decided to make an all about me page if you're wondering where it is you're on it right now.</p>
      </div>
      <div>
        <h3>My TOP 3 Programming Languages</h3>
        <div className="langs">
          <img src={Typescript} />
          <img src={Python} />
          <img src={Java} />
        </div>
      </div>
      
      
    </div>
  );
}
