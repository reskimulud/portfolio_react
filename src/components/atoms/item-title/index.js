import React, { Component } from 'react'

/**
 * Component ItemTitle
 * Component yang menjadi judul dari section
 * @property {span} : property ini akan disisipkan didalam span dan warnanya akan menjadi primary
 */
class ItemTitle extends Component {
    render () {
        return (
            <h4>
                {this.props.children} <span className="text-primary">{this.props.span}</span>
            </h4>
        )
    }
}

export default ItemTitle