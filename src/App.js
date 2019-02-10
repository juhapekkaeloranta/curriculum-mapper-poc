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
    const p = this.state.prequisites

    const courseIndex = p
      .findIndex(course => course.courseName === courseName);
    const topicIndex = p[courseIndex].topics
      .findIndex(topic => topic.name === topicText)
    
    const updatedTopic = { ...p[courseIndex].topics[topicIndex], value: value };

    const updatedTopics = [
      ...p[courseIndex].topics.slice(0, topicIndex),
      updatedTopic,
      ...p[courseIndex].topics.slice(topicIndex + 1),
    ];

    const updatedCourse = { ...p[courseIndex], topics: updatedTopics }

    const updatedPrequisites = [
      ...p.slice(0, courseIndex),
      updatedCourse,
      ...p.slice(courseIndex + 1)
    ]

    this.setState({ ...this.state, prequisites: updatedPrequisites })
  }

  updateTargetTopicValue = (courseName, topicText, value) => {
    const t = this.state.targetCourse
    const topicIndex = t.topics
      .findIndex(topic => topic.name === topicText)
    const updatedTopic = { ...t.topics[topicIndex], value: value }
    const updatedTopics = [
      ...t.topics.slice(0, topicIndex),
      updatedTopic,
      ...t.topics.slice(topicIndex + 1),
    ];
    const updatedCourse = { ...t, topics: updatedTopics }
    this.setState({ ...this.state, targetCourse: updatedCourse })
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
              updateTopicValueF={(courseName, topicText, value) => this.updateTargetTopicValue(courseName, topicText, value)}
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
