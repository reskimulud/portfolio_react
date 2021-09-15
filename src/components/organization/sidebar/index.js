import React, { Component } from "react"
import Image, { ImageType } from "../../atoms/image"
import NavbarNav from "../../molecules/navbar-nav"

const styleSidebar = {
    margin: 0,
    padding: 0,
    width: '300px',
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    height: '100%',
    overflow: 'auto'
}

class Sidebar extends Component {
    constructor () {
        super()
        this.state = {
            links: [
                {
                    name: 'About',
                    href: '#about'
                },
                {
                    name: 'Experience',
                    href: '#experience'
                },
                {
                    name: 'Educaion',
                    href: '#education'
                },
                {
                    name: 'Skills',
                    href: '#skills'
                },
                {
                    name: 'Interest',
                    href: '#interest'
                },
                {
                    name: 'Awards',
                    href: '#awards'
                }
            ],
            active: '#about'
        }
    }
    render () {
        return (
            <aside style={styleSidebar}>
                <div 
                    className="d-flex align-items-center justify-content-center text-center p-5" 
                    style={{height: '100%'}}>
                    <div>
                        <Image 
                        src={'https://reskimulud.my.id/assets/img/about-pic.png'} 
                        type={ImageType.ROUNDED}
                        />
                        <NavbarNav active={this.state.active} links={this.state.links} />
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar