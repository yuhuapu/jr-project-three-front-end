import React from 'react';

import Routes from './routes/Routes';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuText: {
        courseText: ["Course", "Course List", "Add Course", "Search"],
        studentText: ["Student", "Student List", "Add Student", "Search"],
        tutorText: ["Tutor", "Tutor List", "Add Tutor", "Search"]
      }
      
    };
  };

  render() {
    return (
      <div className="container" >
        <Routes menuText = {this.state.menuText} />
      </div>

    );
  }
}

export default App;
