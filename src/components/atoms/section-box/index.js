import React, { Component } from 'react'

/**
 * Component SectionBox
 * Component yang menjadi pembungkus komponen yang lain di setiap section
 * @property {sectionId} : yang menjadi identifier (ID) dari section
 */
class SectionBox extends Component {
    render () {
        return (
            <section 
            id={this.props.sectionId} 
            style={{minHeight: '100vh'}} 
            className="d-flex align-items-center p-4">
                {this.props.children}
            </section>
        )
    }
}

export default SectionBox