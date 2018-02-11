import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// AIzaSyALtmPBjLMXNCFxH99_aTLsZhmGUz9oDqM

import IfscCodeFormField from 'IfscCodeFormField';
import GetIFSCDataAPI from 'GetIFSCDataAPI';
import GetGeoCodeAPI from 'GetGeoCodeAPI';
import DisplayIfscData from 'DisplayIfscData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      inputValue:'',
      IFSCdata:{},
      loading:'',
      location:'',
      lat:null,
      long:null,
      error:null
    }
  }

  handleInput (inputValue) {
    this.setState({
      loading:'loading'
    })
    var that = this;
    GetIFSCDataAPI.getIfscData(inputValue).then(function (data) {
      that.setState({
        inputValue:inputValue,
        IFSCdata:data,
        location:data.DISTRICT
      });

      GetGeoCodeAPI.getGeoCode(that.state.location).then(function (data) {
        that.setState({
          lat:data.results["0"].geometry.location.lat,
          long:data.results["0"].geometry.location.lng,
          loading:'loaded',
        })
      },
      function (errorMessage) {
        alert(errorMessage);
      })
    },
    function (errorMessage) {
      alert("The server responded with 404 please recheck the IFSC code")
      that.setState({
        loading:'',
      })
    })
  }

  render() {
// console.log(this.state.IFSCdata);

    return (
      <div>
        <IfscCodeFormField loading = {this.state.loading} handleInput = {this.handleInput.bind(this)} />
        <DisplayIfscData IFSCdata = {this.state.IFSCdata} loading = {this.state.loading} lat = {this.state.lat} long = {this.state.long} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
