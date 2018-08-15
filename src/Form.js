import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './skeleton.css';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      ciudad: '',
      pais: ''
    };

  }

  render() {
    return (
      <div className = "container">
      <center>
            <h2></h2>
        <input
          type="text" placeholder="ciudad" value={this.state.ciudad} onChange={e => this.setState({ ciudad: e.target.value })} />
        <input type="text" placeholder="pais" value={this.state.pais} onChange={e => this.setState({ pais: e.target.value })} />
        <Link to={`/Weather/${this.state.ciudad/this.state.pais}`} className="button button-primary">
          Obtener Clima
        </Link>
        </center>
      </div>
    );
  }
}

export default Form;

