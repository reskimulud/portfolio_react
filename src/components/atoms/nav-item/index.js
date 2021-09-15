import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link, { LinkClassName } from '../link/index'

class NavItem extends Component {
    render() {
        const {href, className, child} = this.props
        return (
            <li className="nav-item">
                <Link href={href} className={className}>{child}</Link>
            </li>
        )
    }
}

NavItem.defaultProps = {
    className: LinkClassName.DEFAULT
}

NavItem.protoTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    child: PropTypes.string
}

export default NavItem