import React, { Component } from 'react'
import SectionBox from './components/atoms/section-box'
import SectionTitle from './components/atoms/section-title'
import Paragraph from './components/atoms/paragraph'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './components/molecules/btn-icon'
import Image, { ImageType } from './components/atoms/image'
import Link, { LinkClassName } from './components/atoms/link'
import NavbarNav from './components/molecules/navbar-nav'
import Sidebar from './components/organization/sidebar'

import About from './components/organization/about'
import Experience from './components/organization/experience'
import Education from './components/organization/education'
import Skills from './components/organization/skills'
import Interest from './components/organization/interest'
import Awards from './components/organization/awards'



class App extends Component {
  render () {
    return (
      <>
        <Sidebar />
        <div style={{marginLeft: '300px'}}>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interest />
          <Awards />
        </div>
      </>
    )
  }
}

export default App