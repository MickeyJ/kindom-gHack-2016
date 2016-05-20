import React, { Component } from 'react'
import Layout from './layout/layout';

export default class Error extends Component{
  render(){
    return(
      <Layout>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </Layout>
    )
  }
}