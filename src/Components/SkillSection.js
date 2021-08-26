import React from 'react'

const SkillSection = ({skill,progress}) => {
    return (
        <div>
    <div class="skillcontainer">
    <div class="bar learning" data-skill="React 80%"></div>
    <div class="bar back basic" data-skill="javascript 75%"></div>
    <div class="bar back basics" data-skill="JQuery 80%"></div>
    <div class="bar back intermediate" data-skill="Bootstrap 90%"></div>
    <div class="bar front advanced" data-skill="CSS3 90%"></div>
    <div class="bar front expert" data-skill="HTML5 90%"></div>
    <div class="bar front res" data-skill="Responsive Web Designs 90%"></div>
    <div class="bar front res" data-skill="Photoshop 90%"></div>
   

  </div>

        </div>
       
            
      
    )
}

export default SkillSection
