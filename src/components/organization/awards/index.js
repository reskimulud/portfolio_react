import React, { Component } from 'react'
import SectionBox from '../../atoms/section-box'
import SectionTitle from '../../atoms/section-title'
import SectionSubTitle, { classSubTitle } from '../../atoms/section-subtitle'
import IconText from '../../molecules/icon-text'

class Awards extends Component {
    constructor () {
        super()
        this.state = {
            icon: 'certificate',
            color: 'salmon',
            itemsAwards: [
                'Lintasarta Digischool 2021 Awarde (Machine Learning)',
                'AWS Cloud and Backend Schoolarship (Dicoding)',
            ]
        }
    }

    render () {
        const { icon, color, itemsAwards } = this.state
        return (
            <SectionBox sectionId={'awards'}>
                <div>
                    <SectionTitle>Awards & Certifications</SectionTitle>
                    <SectionSubTitle className={classSubTitle.MB5}>Penghargaan dan Sertifikat yang pernah saya dapatkan</SectionSubTitle>
                    {itemsAwards.map((item, index) => {
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

export default Awards