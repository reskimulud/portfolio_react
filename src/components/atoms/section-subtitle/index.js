import React, { Component } from 'react'

export const classSubTitle = {
    DEFAULT: 'text-muted',
    MT5: 'text-muted mt-5',
    MB5: 'text-muted mb-5',
    DANGER: 'text-danger',
}

/**
 * Component SectionSubTitle
 * Component yang menjadi subjudul dari section
 * @property {span} : property ini akan disisipkan didalam span dan warnanya akan menjadi primary
 */
class SectionSubTitle extends Component {
    render () {
        return (
            <h6 className={this.props.className}>
                {this.props.children}
            </h6>
        )
    }
}

SectionSubTitle.defaultProps = {
    className: classSubTitle.DEFAULT
}

export default SectionSubTitle