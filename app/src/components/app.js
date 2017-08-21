import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true
    };
  }

  render() {
    return (
      <h1>Good job!</h1>
    )
  }
}

export default App;
