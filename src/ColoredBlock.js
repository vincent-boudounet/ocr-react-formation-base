import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: 'red'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        this.setState((prevState, props) => ({
            backgroundColor: prevState.backgroundColor === 'red' ? 'blue' : 'red'
        }));
    }

    render(){
        return (
            <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton currentBGColor={this.state.backgroundColor} clickHandler={this.changeColor}></ChangeColorButton>
            </div>
        )
    }
}
export default ColoredBlock;