import react, { Component } from 'react';
import InputPersonal from './InputPersonal';
import '../styles/Academic.css';

class Academic extends Component {
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

  delete = (e) => {
    let id = e.target.parentNode.id;
    let childrenTemp = this.state.children.filter((i) => i != id);
    this.setState({ children: childrenTemp });
  };

  render() {
    return (
      <div className="Academic">
        <div className="topBorder"></div>
        <div className="workTitle">Academic</div>
        {this.state.children.map((n) => (
          <div className="education" key={n} id={n}>
            <div className="left">
              <InputPersonal value="University" className="university">
                {' '}
              </InputPersonal>
              <InputPersonal value="Degree" className="degree">
                {' '}
              </InputPersonal>
            </div>
            <div className="right">
              <InputPersonal value="Location " className="location">
                {' '}
              </InputPersonal>
              <div className="dates">
                <InputPersonal value="From " className="fromDate">
                  {' '}
                </InputPersonal>
                <div>-</div>
                <InputPersonal value="To " className="toDate">
                  {' '}
                </InputPersonal>
              </div>
            </div>
            <button className="delButton" onClick={this.delete}>
              X
            </button>
          </div>
        ))}

        <button className="academicButton" onClick={this.onClicker}>
          + Education
        </button>
      </div>
    );
  }
}

export default Academic;
