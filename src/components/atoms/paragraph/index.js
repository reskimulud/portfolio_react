import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Paragraph extends Component {
    render () {
        return (
            <p className={this.props.className}>{this.props.children}</p>
        )
    }
}

Paragraph.defaultProps = {
    className: ''
}

Paragraph.propTypes = {
    className: PropTypes.string
}

export default Paragraph