import React from 'react'
import "./skills.css"
import JS from '../assets/js-logo.png'
import HTML from '../assets/html-css.png'
import REACT from '../assets/react-logo.png'
import AWS from '../assets/aws-logo.png'
import GitHubCalendar from 'react-github-calendar';


const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

export default function Skills() {
    return (
        
        <div className="center">
            <section className="skills">
                <h2>My Skills</h2>
                <div className="skills-container">
                    <div className="skill-box"><img src={JS} alt="" /><span> <br/>Javascript</span></div>
                    <div className="skill-box"><img src={HTML} alt="" /><br/><span>HTML & CSS</span></div>
                    <div className="skill-box"><img src={REACT} alt="" /><span><br/>React</span></div>
                    <div className="skill-box"><br/><br/><img className ="AWS" src={AWS} alt="" /><span> <br/> AWS</span></div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="skill-box2"><GitHubCalendar colorScheme="dark" username="adamouriel"   
//                 transformData={selectLastHalfYear} 
//   hideColorLegend
//   labels={{
//     totalCount: '{{count}} contributions in the last half year',
//   }} 
    /> </div>
            </section>
        </div>
    )
}