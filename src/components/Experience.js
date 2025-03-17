import React from 'react'
import { skills,history } from '../data/index'
function Experience() {
  return (
    <section className='experience__container' id='skills'>
    <h2 className='experience__title'>Skills & Experience</h2>
    <div className='experience__content'>
    <div className='experience__skills'>
{skills.map((skill,id)=>{
    return(
        <div className='experience__skill' key={id}>
<div className='experience__skillImageContainer'>
    <img src={skill.imageSrc} alt=''/>
</div>
<p>{skill.title}</p>
        </div>
    )
})}
    </div>
   
    </div>
    <ul className='experience__history'>
    {history.map((history,id)=>{
    return(
        <li className='experience__historyItem' key={id}>

    <img src={history.imageSrc} alt=''/>
    <div className='experience__historyItemDetails'>
        <h3>{history.role},{history.organisation}</h3>
        <p>{history.startDate} - {history.endDate}</p>
        <ul>
        {history.experiences.map((experience,id)=>{
    return(
        <li  key={id}>{experience}</li> )
    })}
        </ul>
</div>
        </li>
    )
})}
    </ul>
</section>
  )
}

export default Experience