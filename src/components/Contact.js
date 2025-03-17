import React from "react"; 
import emailicon from "../assets/emailIcon.png"; 
import linkedinIcon from "../assets/linkedinIcon.png"; 
import githubicon from "../assets/githubIcon.png"; 
function Contact() { 
return ( 
<footer className="contact__container" id="contact"> 
<div className="contact__text"> 
<h2>Contact</h2> 
<p>Feel free to reach out</p> 
</div> 
<ul className="contact__links"> 
<li className="contact__link"> 
<img src={emailicon} alt="" /> 
<a href="mailto:ravishajh@gmail.com">ravishajh@gmail.com</a> 
</li> 
<li className="contact__link"> 
<img src={linkedinIcon} alt="" /> 
<a href="https://www.linkedin.com/in/ravisha-j-h">linkedin.com/ravisha-j-h</a> 
</li> 
{/* <li className="contact__link"> 
<img src={githubicon} alt="" /> 
<a href="https://www.github.com/">githun.com/myname</a> 
</li>  */}
</ul> 
</footer> 
); 
}
export default Contact