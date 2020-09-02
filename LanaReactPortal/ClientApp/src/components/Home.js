import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1><strong>Hello, Ecotown ! </strong></h1>
        <p>Welcome to your eco-life style:</p>
        <ul>
          <li><a href='https://get.preciousplastique.net/'>EC utilisation plastic programs </a></li>
          <li><a href=''> Become a partners : create points for gathering waste products, conversion into useful products </a> </li>
        </ul>
      </div>
    );
  }
}
