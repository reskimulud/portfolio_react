import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Link ClassName
 * Mengembalikan className yang digunakan untuk link dari sebuah navigasi (contoh)
 * ACTIVE artinya link tersebut sama dengan halaman yang diload
 * DEFAULT apabila kita tidak menambahkan ACTIVE di props
 */
export const LinkClassName = {
    ACTIVE: 'nav-link active',
    DEFAULT: 'nav-link',
}


/**
 * Button Type
 * Jika kita ingin mengbah link menjadi Button (tombol)
 * Ada banyak pilihan warna tomol sesuai dengan pilihan di bootstrap
 */
export const ButtonType = {
    PRIMARY: 'btn btn-primary',
    SECONDARY: 'btn btn-secondary',
    SUCCESS: 'btn btn-success',
    DANGER: 'btn btn-danger',
    WARNING: 'btn btn-warning',
    INFO: 'btn btn-info',
    PRIMARY_ROUNDED: 'btn btn-primary rounded-circle',
    PRIMARY_PILL: 'btn btn-primary rounded-pill'
}

/**
 * Component Link
 * Komponen utuk membuat Link (anchor) atau bisa juga Button dengan mengimport ButtonType
 * @property {className}  : class CSS yang digunakan oleh Link ini
 * @property {href} : halaman referensi dari link
 */
class Link extends Component {
    render () {
        console.log(this.props)
        const {href, className} = this.props
        return (
            <a className={className} href={href}>{this.props.children}</a>
        )
    }
}

Link.defaultProps = {
    className: LinkClassName.DEFAULT,
    href: '#'
}

Link.protoTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
}

export default Link



