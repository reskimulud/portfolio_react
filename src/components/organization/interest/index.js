import React, { Component } from 'react'
import SectionBox from '../../atoms/section-box'
import SectionTitle from '../../atoms/section-title'
import Paragraph from '../../atoms/paragraph'

class Interest extends Component {
    render () {
        return (
            <SectionBox sectionId={'interest'}>
                <div>
                    <SectionTitle>Interest</SectionTitle>
                    <Paragraph>Saya sekarang sedang tertarik dalam membuat aplikasi Android dan mengembangkan model Machine Learning menggunakan framework/library Tensorflow</Paragraph>
                    <Paragraph>Selain itu, saya juga mnyukai hal yang baru saya temui, karena itu akan menjadi tantangan buat saya</Paragraph>
                </div>
            </SectionBox>
        )
    }
}

export default Interest