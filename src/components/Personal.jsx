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
        <div className="left">
            <div className="names">
          <InputPersonal className="firstName" value="First Name">
            {' '}
          </InputPersonal>
          <InputPersonal className="lastName" value="Last Name">
            {' '}
          </InputPersonal>
          </div>
          <InputPersonal className="currentRole" value="Current Role">
            {' '}
          </InputPersonal>
        </div>
        <div className="right">
          <InputPersonal className="address1" value="Address 1"></InputPersonal>
          <InputPersonal className="address2" value="Address 2"></InputPersonal>
          <InputPersonal className="phone" value="Phone"></InputPersonal>
          <InputPersonal className="email" value="Email"></InputPersonal>
          <InputPersonal className="linkedin" value="LinkedIn"></InputPersonal>
        </div>
      </div>
    );
  }
}

export default Personal;
