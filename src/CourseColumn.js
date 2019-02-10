import React, { Component } from 'react';
import './App.css';
import HeaderButton from './HeaderButton'
import ToggleButton from './ToggleButton'

class CourseColumn extends Component {
  render() {
    return (
      <div className="curri-column">
        <HeaderButton text={this.props.course}/>
        {this.props.topics.map(topic =>
          <ToggleButton 
            key={topic.name}
            course={this.props.course}
            topic={topic}
            text={topic.name}
            updateTopicValue={
              (course, topic, value) => this.props.updateTopicValueF(course, topic, value)
            }/>
        )}
    </div>
    )
  }
}

export default CourseColumn