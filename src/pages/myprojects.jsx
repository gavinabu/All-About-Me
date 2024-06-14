import './projects.css';
import DownloadButton from '../font-awesome/regular/download.svg'
import { useEffect, useState } from 'react';
import config from '../config.json'
export default function Projects() {
  return (
    <div className="projectsPage" page="top">
      <div className="projects">
        {config.projects.map(project => (
          <div className="project">
            <h1 style={{fontFamily:"Nunito SANS",fontSize:'24px'}}>{project.name}</h1>
            <p style={{fontFamily:"Comfortaa"}}>{project.description}</p>
            <a href={project.link}><button>{project.projectType == "WEBSITE" ? "Visit" : "Unknown"}</button></a>
          </div>
        ))}
      </div>
    </div>
  );
}
