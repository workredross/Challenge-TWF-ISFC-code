import React, { Component } from 'react';

require('style!css!InputBarCSS');
require('style!css!LoaderCSS');

class IfscCodeFormField extends Component {
  
  handleInput(e) {
    e.preventDefault();
    // console.log(this.refs.input.value);
    var inputValue = this.refs.input.value;
    this.props.handleInput(inputValue);
  }

  render() {
    var loading = this.props.loading;
    if (loading=='loading'){
      return (
        <div>
          <div className="text-input">
            <form onSubmit = {this.handleInput.bind(this)}>
              <input type="text" ref = "input" id="input1" placeholder=""></input>
              <label>Type IFSC and press Enter</label>
              <div className="loading-spinner">
                <div className ="dot dotOne"></div>
                <div className="dot dotTwo"></div>
                <div className="dot dotThree"></div>
              </div>
            </form>
          </div>
        </div>
      );
    }else{
      return (
        <div>
          <div className="text-input">
            <form onSubmit = {this.handleInput.bind(this)}>
              <input type="text" ref = "input" id="input1" placeholder=""></input>
              <label>Type IFSC and press Enter</label>
              
            </form>
          </div>
        </div>
      )}
  }
}

export default IfscCodeFormField;