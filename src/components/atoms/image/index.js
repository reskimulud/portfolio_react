import React, { Component } from "react"
import PropTypes from 'prop-types'

export const ImageType = {
    DEFAULT: 'img-thumbnail',
    ROUNDED: 'img-thumbnail rounded-circle'
}

class Image extends Component {
    render () {
        const {src, width, height} = this.props
        return (
            <img src={src} className={this.props.type} alt="alternatif-text" width={width} height={height} />
        )
    }
}

Image.defaultProps = {
    type: ImageType.DEFAULT
}

Image.protoTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string
}

export default Image