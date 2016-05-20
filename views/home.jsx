import React, { Component } from 'react'

import Layout from './layout/layout'

import MapComponent from './components/MapComponent'
import InfoBox from './components/InfoBox'

export default class Index extends Component{
  render(){
    return(
      <Layout player={this.props.player}>
        
        <MapComponent />

        <div className="container-fluid">
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </div>

      </Layout>
    )
  }
}