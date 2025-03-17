import React from 'react'
import { projects } from '../data/index'
function Projects() {
  return (
    <section className='projects__container' id='projects'>
<h2 className='projects__title'>Projects</h2>
<div className='projects'>
{projects.map((project,id)=>{
    return <div className='project-container' key={id}>
        <img className='project-img' src={project.imageSrc} alt=''/>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
        <ul className='projects-skills'>
            {project.skills.map((skill,id)=>{
                return <li className='project-skill' key={id}>{skill}</li>
            })}

        </ul>
        {/* <div className='project-links'>
            <a href={project.source} className='project-link'> Source</a>
            </div> */}
    </div>
})}
</div>
    </section>
  )
}

export default Projects