import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '../../atoms/paragraph'

class IconText extends Component {
    render () {
        library.add(fas)
        return (
            <div className="d-flex" style={{height: '25px'}}>
                <FontAwesomeIcon size="lg" icon={this.props.icon} color={this.props.color} />
                <Paragraph className={'ms-2'}>{this.props.children}</Paragraph>
            </div>
        )
    }
}

IconText.defaultProps = {
    color: ''
}

export default IconText