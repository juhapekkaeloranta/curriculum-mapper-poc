import React, { Component } from 'react';
import './App.css';
import CourseColumn from './CourseColumn';

class App extends Component {
  state = {
    prequisites: [
      { courseName: "Linis 1",
        topics: [
          { name: 'Käänteismatriisi', value: 1 },
          { name: 'Matriisin transpoosi', value: 1 },
          { name: 'Matriisin determinantti', value: 1 }
        ]
      },
      { courseName: "Linis 2",
        topics: [
          { name: 'Matriisin derivaatta', value: 1 },
          { name: 'Matriisin integrointi', value: 1 },
          { name: 'Vectoreiden yhteenlasku', value: 1 },
          { name: 'Matriisin nypläys', value: 1 }
        ]
      },
      { courseName: "Todennäköisyyslaskenta I",
        topics: [
          { name: 'Todennäköisyyksien laskusäännöt', value: 1 },
          { name: 'Bayesin kaava', value: 1 },
          { name: 'Diskreetit todennäköisyydet', value: 1 }
        ]
      }  
    ],
    targetCourse: {
      courseName: 'IML',
      topics: [
        { name: 'clustering', value: 1 },
        { name: 'overfit', value: 1 },
        { name: 'cross-validation', value: 1 }
      ]
    }
  }

  saveResults = () => {
    console.log(JSON.stringify(this.state))
  }

  updateTopicValue = (courseName, topicText, value) => {
    const updatedPrequisites = this.state.prequisites
      .map(course => course.courseName !== courseName 
        ? course 
        : { ...course, topics: course.topics.map(topic => topic.name !== topicText
          ? topic
          : { ...topic, value: value } )})

    this.setState({ ...this.state, prequisites: updatedPrequisites })
  }

  updateTargetTopicValue = (topicText, value) => {
    const updatedTopics = this.state.targetCourse.topics.map(topic =>
      topic.name !== topicText
      ? topic
      : { ...topic, value: value }
    )
    const updatedTargetCourse = { ...this.state.targetCourse, topics: updatedTopics }
    this.setState({ ...this.state, targetCourse: updatedTargetCourse })
  }

  render() {
    return (
      <div className="App">

        <div className="curri-column-container">
          {this.state.prequisites.map(course => 
            <CourseColumn
              key={course.courseName}
              course={course.courseName}
              topics={course.topics}
              updateTopicValueF={(courseName, topicText, value) => this.updateTopicValue(courseName, topicText, value)}
            />
          )}
        </div>
        
        <div className="right-menu">
          <div className="right-menu-splitter">
            <CourseColumn
              course={this.state.targetCourse.courseName}
              topics={this.state.targetCourse.topics}
              updateTopicValueF={(_, topicText, value) => this.updateTargetTopicValue(topicText, value)}
            />
            <button 
              className="curri-button send"
              style={{backgroundColor: '#e8e8e8'}}
              onClick={this.saveResults}>
              Save
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
