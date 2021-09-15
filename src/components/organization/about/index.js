import React, { Component } from "react"
import SectionBox from '../../atoms/section-box'
import SectionTitle from "../../atoms/section-title"
import SectionSubTitle, { classSubTitle } from "../../atoms/section-subtitle"
import Paragraph from "../../atoms/paragraph"
import BtnIcon from '../../molecules/btn-icon'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class About extends Component {
    render () {
        return (
            <SectionBox sectionId={'about'}>
                <div>
                    <SectionTitle span={'Reski Mulud Muchamad'}>Hello, I'm</SectionTitle>
                    <SectionSubTitle className={classSubTitle.MB5}>Software Developer</SectionSubTitle>

                    <Paragraph>
                        I am Reski Mulud Muchamad, a Software Developer and Graphic Designer. I am currently studying at the Muhammadiyah University of Sukabumi and taking the Informatics Engineering study program and am currently taking semester 5.
                    </Paragraph>

                    <Paragraph>
                        I am a person who really likes new things, and feel challenged about it. I really enjoy exploring and seeking knowledge in the world of computers, gadgets and programming, that's the reason I chose to study Informatics Engineering.
                    </Paragraph>

                    <BtnIcon href={'https://bit.ly/LinkedInRESKI'} faTypeIcon={faLinkedin} iconName={'linkedin'} />
                    <BtnIcon href={'https://instagram.com/reskimulud'} faTypeIcon={faInstagram} iconName={'instagram'} />
                    <BtnIcon href={'https://github.com/reski-mulud-muchamad'} faTypeIcon={faGithub} iconName={'github'} />
                </div>
            </SectionBox>
        )
    }
}

export default About