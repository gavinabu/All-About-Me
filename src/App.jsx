import Home from './pages/home';
import logo from './theo.png';
import { useEffect, useState } from 'react';
import ArrowUp from './font-awesome/solid/arrow-up.svg'
import GitHub from './font-awesome/brands/github-square.svg'
import Google from './font-awesome/brands/google.svg'
import Scratch from './Scratch.png'
import Mail from './font-awesome/duotone/envelope.svg'
import JSocial from './JSocial.svg'
import Fonts from './pages/fonts';
import Projects from './pages/myprojects';
import Experience from './pages/experience';
const messages = [
  // "Yo, It's Gavin",
  "Hey, I'm Gavin Abu"
]
const socials = {
  gdev:"https://g.dev/justwhatever",
  github:"https://github.com/gavinabu",
  email:"mailto:gavinabuzahra@justwhatever.net",
  jsocial:"https://www.jwn.social/profile/gav",
  scratch:"https://scratch.mit.edu/users/vanillac0der/"
}
const delay = 200
function App() {
  var chosenMessage = ""
  var today = new Date()
  if(today.getMonth() == 11 && today.getDate() == 25) {
    chosenMessage = "Merry christmas"
  } else {
    chosenMessage = messages[Math.floor(Math.random() * messages.length)]
  }
  const [currentText, setCurrentText] = useState(' ︎');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < chosenMessage.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + chosenMessage[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay * ((Math.random() / 2) + 0.5));
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, chosenMessage]);
  var [page,setThePage] = useState("home")
  function setPage(tpage) {
    if(page == tpage) {
      return
    }
    document.querySelector("main div[page='top']").setAttribute("page","switch")
    setTimeout(() => {
      document.querySelector("main div[page='switch']").style.display = "none"
    },100)
    setTimeout(() => {
      setThePage(tpage)
    },300)
  }
  function getPage() {
    switch(page) {
      case "home": {
        return (
          <Home/>
        )
      }
      case "fonts": {
        return (
          <Fonts/>
        )
      }
      case "projects": {
        return (
          <Projects/>
        )
      }
      case "experience": {
        return (
          <Experience/>
        )
      }
      default: {
        return (
          <>
            <p>Erm. I think I did something wrong</p>
          </>
        )
      }
    }
  }
  function goto(link) {
    window.location.replace(link)
  }
  return (
    <div className="App">
      <nav>
        <img className='pfp' src={logo} alt='Theo'/>
        <h1>{currentText}</h1>
        <p className='subtitle'><img src={ArrowUp}/> That's my cat his name is Theo</p>
        <div className="socials">
          <button onClick={() => {goto(socials.github)}}><img src={GitHub} alt='Github'/></button>
          <button onClick={() => {goto(socials.gdev)}}><img src={Google} alt='Google'/></button>
          <button onClick={() => {goto(socials.jsocial)}}><img src={JSocial} alt='JSocial'/></button>
          <button onClick={() => {goto(socials.scratch)}}><img src={Scratch} alt='Scratch' style={{height:"32px",filter:"grayscale() invert()"}}/></button>
          <button onClick={() => {goto(socials.email)}}><img src={Mail} alt='Email'/></button>
        </div>
        <div className="links">
          <button onClick={() => {setPage("home")}}>About Me</button>
          <button onClick={() => {setPage("fonts")}}>My Favorite Fonts</button>
          <button onClick={() => {setPage("projects")}}>My Projects</button>
          <button onClick={() => {setPage("experience")}}>Experience</button>
        </div>
        
      </nav>
      <main>
        {getPage()}
      </main>
      
    </div>
  );
}

export default App;
