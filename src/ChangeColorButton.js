import React from 'react';

class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.clickHandler();
        console.log("clicked");
    }
    render(){
        return (
          <button onClick={this.handleClick}>
              {(this.props.currentBGColor === 'red') ? 'I don\'t like red' : 'I don\' like blue'}
          </button>
        );
    }
}

export default ChangeColorButton;