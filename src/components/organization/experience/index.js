import React, { Component } from 'react'
import SectionBox from '../../atoms/section-box'
import SectionTitle from '../../atoms/section-title'
import Item from '../../molecules/item'

class Experience extends Component  {
    constructor () {
        super()
        this.state = {
            items : [
                {
                    title: 'Coding Mentor SIC',
                    company: 'Skilvul',
                    text: 'Menjadi fasilitator dalam kegiatan bootcamp SIC yang diselenggarakan oleh Skilvul',
                    date: '3 Agustus - Sekarang'
                },
                {
                    title: 'Google DSC Lead',
                    company: 'Google Developer Student Clubs Universitas Muhammadiyah Sukabumi',
                    text: 'Menjadi Lead dari Global Community GDSC chapter Universitas Muhammadiyah Sukabumi. GDSC sendiri adalah komunitas yang berada dibawah naungan Google Developers yang dimana komunitas ini sudah berdiri di berbagai negara di seluruh dunia',
                    date: '13 Agustus - Sekarang'
                }
            ]
        }
    }
    
    render () {
        const { items } = this.state
        return (
            <SectionBox sectionId={'experience'}>
                <div>
                    <SectionTitle>Experience</SectionTitle>
                    <div className="mt-5">
                        {items.map((item, index) => {
                            return (
                                <Item 
                                    key={index} 
                                    title={item.title}
                                    subtitle={item.company}
                                    paragraph={item.text}
                                    date={item.date}
                                />
                            )
                        })}
                    </div>
                </div>
            </SectionBox>
        )
    }
}

export default Experience