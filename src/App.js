import React, { Component } from 'react'
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