import Personal from './components/Personal';
import Work from './components/Work';
import Academic from './components/Academic';
import Skills from './components/Skills';
import react, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
    };
  }

  hide = (e) => {
    this.setState({ visibility: false });
    console.log(this.state.visibility);
  };

  render() {
    return (
      <div className="CV">
        <Personal></Personal>
        <Work visibility={this.state.visibility}></Work>
        <Academic> </Academic>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
