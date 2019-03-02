import React, { Component } from 'react';
import './App.css';

class ResultRow extends Component {
  render() {
    return (
      <div>
        <button 
          className="curri-button" 
          style={{backgroundColor: '#ffffff'}}>
          {this.props.text}
        </button>
        <button 
          className="curri-button narrow" 
          style={{backgroundColor: '#ffffff'}}>
          {this.props.votes}
        </button>
        <button 
          className="curri-button narrow" 
          style={{backgroundColor: '#ffffff'}}>
          {this.props.votes2}
        </button>
      </div>
    )
  }
}

export default ResultRow