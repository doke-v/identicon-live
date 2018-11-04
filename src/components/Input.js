import React, { Component } from 'react';

class Input extends Component {
  state = {text: ""}
  submitted(evt){
    if(evt.key === "Enter"){
        this.props.callback(this.state.text)
        this.setState({text: ""})
    }  
  }
  changed(evt){
      this.setState({text: evt.target.value}, ()=> {
        this.props.callback(this.state.text)
      })
  }
  render() {
    return (
      <input className = "input" type="text" value ={this.props.value} onKeyUp={this.submitted.bind(this)} onChange={this.changed.bind(this)}></input>
    );
  }
}

export default Input;