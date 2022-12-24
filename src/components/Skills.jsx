import react, { Component } from 'react';
import InputPersonal from './InputPersonal';
import '../styles/Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      counter: 0,
    };
  }

  onClicker = (e) => {
    let childrenTemp = this.state.children;
    childrenTemp.push(this.state.counter);
    this.setState({ children: childrenTemp });
    this.setState((state, props) => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <div className="Skills">
        <div className="topBorder"></div>
        <div className="workTitle">Skills</div>
        <div className="SkillsContainer">
          {this.state.children.map((n) => (
            <div className="skill" key={n}>
              <InputPersonal value="Skill" className="skill">
                {' '}
              </InputPersonal>
            </div>
          ))}
        </div>

        <button className="academicButton" onClick={this.onClicker}>
          + Skill
        </button>
      </div>
    );
  }
}

export default Skills;
