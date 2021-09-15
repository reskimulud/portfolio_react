import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavItem from '../../atoms/nav-item'
import { LinkClassName } from '../../atoms/link'

class NavbarNav extends Component {

    render () {
        const { links, active } = this.props
        return (
            <ul className="nav flex-column mt-3">
                {links.map((item, index) => {
                    console.log(item)
                    return (
                        <NavItem 
                            key={index} 
                            href={item.href} 
                            child={item.name}
                            className={
                                (item.href === active) ? LinkClassName.ACTIVE : LinkClassName.DEFAULT 
                            }
                        />
                    )
                })}
            </ul>
        )
    }
}

NavbarNav.protoTypes = { 
    links: PropTypes.array
}

export default NavbarNav