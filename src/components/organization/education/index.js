import React, { Component } from 'react'
import SectionBox from '../../atoms/section-box'
import SectionTitle from '../../atoms/section-title'
import Item from '../../molecules/item'

class Education extends Component  {
    constructor () {
        super()
        this.state = {
            items : [
                {
                    title: 'Sarjana Komputer (S.Kom)',
                    school: 'Universitas Muhammadiyah Sukabumi',
                    text: 'Mahasiswa semester 5 di Universitas Muhammadiyah Sukabui dengan jurusan teknik Informatika. Aktivitas yang pernah saya ikuti yaitu menjadi anggota Himpunan Mahasiswa Teknik Informatika, LDK Al-Umm dan sekaran menjadi Lead di GDSC UMMI',
                    graduate: 'Agustus 2019 - Sekarang'
                },
                {
                    title: 'SMA',
                    school: 'SMA Negeri 5 Kota Sukabumi',
                    text: 'Aktivitas yang saya ikuti di SMA antara lain menjadi Sekretaris Umum di Komunitas Senirupa V Sma Negeri 5, menjadi anggota di Glory Music Coorporation',
                    graduate: 'Juni 2016 - Mei 2019'
                }
            ]
        }
    }
    
    render () {
        const { items } = this.state
        return (
            <SectionBox sectionId={'education'}>
                <div>
                    <SectionTitle>Education</SectionTitle>
                    <div className="mt-5">
                        {items.map((item, index) => {
                            return (
                                <Item 
                                    key={index} 
                                    title={item.title}
                                    subtitle={item.school}
                                    paragraph={item.text}
                                    date={item.graduate}
                                />
                            )
                        })}
                    </div>
                </div>
            </SectionBox>
        )
    }
}

export default Education