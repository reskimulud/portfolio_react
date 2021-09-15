import React, { Component } from 'react'

/**
 * Component SectionTitle
 * Component yang menjadi judul dari section
 * @property {span} : property ini akan disisipkan didalam span dan warnanya akan menjadi primary
 */
class SectionTitle extends Component {
    render () {
        return (
            <h1>
                {this.props.children} <span className="text-primary">{this.props.span}</span>
            </h1>
        )
    }
}

export default SectionTitle