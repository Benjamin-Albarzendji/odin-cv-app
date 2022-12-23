import react, { Component } from 'react';

class InputPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isEditing: false,
    };
  }



  keyDown = (e) => {
    
    if (e.keyCode === 13){
        // e.preventDefault()
        e.target.blur()
        this.setState({
            value: e.target.textContent,
          });
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyDown={this.keyDown}
        onInput={this.changeText}
      >
        {this.state.value}
      </div>
    );
  }
}

export default InputPersonal;
