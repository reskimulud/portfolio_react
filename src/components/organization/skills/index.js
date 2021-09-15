import React, { Component } from 'react'
import SectionBox from '../../atoms/section-box'
import SectionSubTitle, { classSubTitle } from '../../atoms/section-subtitle'
import SectionTitle from '../../atoms/section-title'
import IconText from '../../molecules/icon-text'

class Skills extends Component {
    constructor () {
        super()
        this.state = {
            skillsItems: [
                'PHP',
                'Kotlin',
                'Java',
                'Python',
                'JavaScript',
            ],
            icon: 'check-circle',
            color: 'green'
        }
    }
    
    render () {
        const { color, icon, skillsItems } = this.state
        return (
            <SectionBox sectionId="skills">
                <div>
                    <SectionTitle>Skills</SectionTitle>
                    <SectionSubTitle className={classSubTitle.MB5}>Programming Languange</SectionSubTitle>
                    {skillsItems.map((item, index) => {
                        return (
                            <IconText 
                                key={index}
                                icon={icon}
                                color={color}
                            >{item}</IconText>
                        )
                    })}
                </div>
            </SectionBox>
        )
    }
}

export default Skills