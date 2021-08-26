import React from 'react'
import ImageSection from '../Components/ImageSection'
import SkillSection from '../Components/SkillSection'
import Tittle from '../Components/Tittle'
import ServicesSection from '../Components/ServicesSection '
import design from '../img/download.jpg'
import designrc from '../img/download1.png'
import designnd from '../img/downloadnd.jpg'

const AboutPage = () => {
    return (
        <div className="AboutPage">
           <Tittle tittle={'About me'} span={'about me'}/>
           <ImageSection/>
           <Tittle tittle={'My Skill'} span={'My Skill'}/>
           <SkillSection skill={'Javascript'} progress={'70%'}/>
           <Tittle tittle={'Services'} span={'Services'}/>
           <div className="services-container">
            <ServicesSection image={design} text={"html,css,javcsript"}/>
            <ServicesSection image={designrc}  text={"reactjs,redux"} />
            <ServicesSection image={designnd}  text={"photoshop"}/>
           </div>   
        </div>
    )
}

export default AboutPage;
