import React, { Component } from 'react'

export default class Layout extends Component{
  render(){

    var playerName = (
      this.props.player
        ?  <span id="player-name">{this.props.player.name}</span>
        : ''
    );

    return(
      <html lang="en">
        <head>
          <title>express-nested-views</title>
          <meta name="HandheldFriendly" content="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="css/main.css" />

          <script src="bower_components/jquery/dist/jquery.min.js"></script>
        </head>
        <body>

          <div id="nav-header" className="container-fluid">
            <header>
              <span>Kingdom</span>
            </header>

            <nav id="nav">
              <a href="/" >Home</a>
              <span> | </span>
              <a href="/auth" >Login/Signup</a>
              {playerName}
            </nav>
          </div>

          <main>
            {this.props.children}
          </main>

          <script src="js/active-link.js"></script>
        </body>
      </html>
    )
  }
}