import react, { Component } from 'react';

class InputPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onEnter = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.target.blur();
    }
  };

  onFocuser = (e) => {
    if (e.target.textContent === this.state.value) {
      e.target.textContent = '';
    }
  };

  onBlurer = (e) => {
    if (e.target.textContent === '') {
      e.target.textContent = this.state.value;
    }
  };

  onClicker = (e) => {
    e.target.contentEditable = true;
    e.target.focus();
  };

  render() {
    return (
      <div
        className={this.props.className}
        contentEditable="false"
        suppressContentEditableWarning={true}
        onKeyDown={this.onEnter}
        onFocus={this.onFocuser}
        onBlur={this.onBlurer}
        onClick={this.onClicker}
      >
        {this.state.value}
      </div>
    );
  }
}

export default InputPersonal;
