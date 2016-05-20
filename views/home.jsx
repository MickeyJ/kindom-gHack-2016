import React, { Component } from 'react'

import Layout from './layout/layout'

import MapComponent from './components/MapComponent'

export default class Index extends Component{
  render(){
    return(
      <Layout>
        
        <MapComponent />
        
      </Layout>
    )
  }
}