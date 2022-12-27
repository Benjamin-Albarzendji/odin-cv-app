import react, { Component } from 'react';
import InputPersonal from './InputPersonal';
import '../styles/Work.css';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      counter: 0,
      visibility: props.visibility,
    };
  }

  onClicker = (e) => {
    console.log(this.state.visibility);
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
      <div className="Work">
        <div className="topBorder"></div>
        <div className="workTitle">Work Experience</div>
        {this.state.children.map((n) => (
          <div className="job" key={n} id={n}>
            <div className="left">
              <InputPersonal value="Company" className="company">
                {' '}
              </InputPersonal>
              <InputPersonal value="Sector" className="sector">
                {' '}
              </InputPersonal>
              <InputPersonal value="Title" className="title">
                {' '}
              </InputPersonal>
              <InputPersonal value="Description " className="description">
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
            </div>{' '}
            <button className="delButton" onClick={this.delete}>
              X
            </button>
          </div>
        ))}

        <button className="workButton" onClick={this.onClicker}>
          + Job
        </button>
      </div>
    );
  }
}

export default Work;
