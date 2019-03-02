import React, { Component } from 'react';
import './App.css';

class ResultHeader extends Component {
  render() {
    return (
      <div>
        <button 
          className="curri-button"
          style={{backgroundColor: '#e8e8e8'}}>
          {this.props.title1}
        </button>
        <button 
          className="curri-button narrow"
          style={{backgroundColor: '#e8e8e8'}}>
          {this.props.title2}
        </button>
        <button 
          className="curri-button narrow"
          style={{backgroundColor: '#e8e8e8'}}>
          {this.props.title3}
        </button>
      </div>
    )
  }
}

export default ResultHeader