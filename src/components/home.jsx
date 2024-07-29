import React, { useEffect, useState } from 'react'; 
import picture from '../assets/adam-pic.png';
import './home.css';
import resume from '../assets/resume.pdf';

export default function Home() {
    const [homeMain, setHomeMain] = useState(''); 
    useEffect(() => {
        setHomeMain('visible'); 
    }, []); 

    return (
        <section className={`home-main ${homeMain}`}> {}
            <div className="introText">
                <p>Welcome! I'm <span className="name">ADAM OURIEL</span> <br />, Fullstack JavaScript Developer, Music Producer, and Design Enthusiast</p>
                {/* <a className="button" href={resume} download="résumé.pdf">Download Résumé</a>{} */}
            </div>
            <div>
                <img src={picture} alt="Adam Ouriel"/> {}
            </div>
        </section>
    );
}