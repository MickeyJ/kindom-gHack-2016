import React, { Component } from 'react'

import Layout from './layout/layout'

export default class Contact extends Component{
  render(){
    return(
      <Layout>

        <form className="form-group" action="" >
          <input className="form-control" type="text" name="name" placeholder="Name"/>
          <input className="form-control" type="text" name="email" placeholder="Email"/>
          <input className="form-control" type="password" name="password" placeholder="Password"/>

          <input type="button" value="Submit"/>
        </form>

      </Layout>
    )
  }
}