import './home.css';
import { useState } from 'react';
import Typescript from '../Typescript.svg'
import Python from '../Python.svg'
import Java from '../Java.svg'
const text = `
Hey, I'm Gavin Abu, I'm a software developer and have my own company called JustWhatever. I also have plenty of personal projects that I have coded. When I was little, I was always toying around with computers and seeing how things worked. My dad introduced me to scratch when I was little, and I remember I made this game where I spelled my name and when I clicked on my name it got bigger for 1 second and then returned to normal. I kept using scratch and made bad operating systems and just some cool stuff, and learned the basics of how to think like a programmer.

Around 2020 I was introduced to minecraft Java, I had played the console versions forever but being able to use mods and all these cool quote on quote "Developer Features" just seemed so cool. I decided to learn how to make minecraft mods and learned Java, was it the best language to start with God no, but I got the hang of it and made some cool minecraft mods.

I wanted to learn how to make websites but I had no clue how so I followed some tutroials and learned HTML and CSS, but JavaScript seemed like a big jump, so I just made a bunch of websites that did not do much.

Eventually I learned how to make discord bots and decided to finally use JavaScript with DiscordJS. I ended up making some game bots but scrapped all of them and went back to making websites.

I made JSocial 1.0 It was a hit with me and my friends we were on it 24/7 and never got off. It was really basic and had too many bugs to count, and eventually I took a hit for that. I stored user data In a big .json array file, and It got corrupted because 2 people send a request and edited the file at the same time. Note to self, don't use JSON as a database and MAKE BACKUPS.

After that JSocial kind of fell off, and I started working on 2.0 but overcomplicated it and ended up trying again with 3.0 with REACT but I had a bad backend and I decided to make 4.0 with a good backend using MongoDB and on the frontend using React.

Currently, Im just trying to learn new frameworks and impoving old websites.
`
export default function Home() {
  return (
    <div className="homePage" page="top">
      <div>
        <h2 style={{fontFamily:"Rubik"}}>About Me</h2>
        {text.split("\n").map(e => (
          <p style={{fontFamily:"Comfortaa",minHeight:"14px"}}>{e}</p>
        ))}
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
