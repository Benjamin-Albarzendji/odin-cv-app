import react, { Component } from 'react';
import InputPersonal from './InputPersonal';
import '../styles/Personal.css';

class Personal extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      currentRole: 'Current Role',
    };
  }
  render() {
    return (
      <div className="Personal">
        <InputPersonal className="firstName" value="First Name">
          {' '}
        </InputPersonal>
        <InputPersonal className="lastName" value="Last Name">
          {' '}
        </InputPersonal>
        <InputPersonal className="currentRole" value="Current Role">
          {' '}
        </InputPersonal>
      </div>
    );
  }
}

export default Personal;
