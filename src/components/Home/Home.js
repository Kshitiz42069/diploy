import React from 'react'
import Hero from './Hero/Hero'
import Content from './Content/Content'
import Growth from './Growth/Growth'
import GelatoMeet from './Connect/GaletoMeet'
import GelatoConnect from './Connect/GaletoConnect'
import Contact from './contact/Contact'


function Home() {
  return (
    <div>
      <Hero/>
      <Contact/>
      <Content/>
      <Growth/>
      <GelatoConnect/>
      <GelatoMeet/>
    </div>
  )
}

export default Home