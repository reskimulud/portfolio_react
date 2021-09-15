import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link, { ButtonType } from '../../atoms/link'
import { fab } from '@fortawesome/free-brands-svg-icons'

export const colorIcon = {
    DEFAULT: '',

}

class BtnIcon extends Component {
    render () {
        const {href, faTypeIcon, iconName} = this.props
        library.add(fab, faTypeIcon)
        return (
            <Link href={href} className={ButtonType.PRIMARY_PILL + ' me-2'} >
                <FontAwesomeIcon icon={['fab', iconName]} color='' />
            </Link>
        )
    }
}

export default BtnIcon