import React, { Component } from 'react';

class DisplayIfscData extends Component {
    
    render() {
        var {IFSCdata, loading, lat, long} = this.props;
        if(loading=='loaded'){
            return (
                <div className='IFSCdata' style={{position: 'absolute',top: '40vh'}}>
                  <strong>Bank Name: </strong> {IFSCdata.BANK}<br></br><br></br>
                  <strong>Bank Code: </strong> {IFSCdata.BANKCODE}<br></br><br></br>
                  <strong>Address: </strong> {IFSCdata.ADDRESS}<br></br><br></br>
                  <strong>Contact: </strong> {IFSCdata.CONTACT}<br></br><br></br>
                  <strong>District: </strong> {IFSCdata.DISTRICT}<br></br><br></br>
                  <strong>City: </strong> {IFSCdata.CITY}<br></br><br></br>
                  <strong>State: </strong> {IFSCdata.STATE}<br></br><br></br>
                  <strong>IFSC Code: </strong> {IFSCdata.IFSC}<br></br><br></br>
                  <strong>Latitude: </strong> {Math.round(lat)} <strong> Longitude: </strong> {Math.round(long)}
                </div>
            );
        }else{
            return (
                <div ></div>
            );
        }
        
    }
}

export default DisplayIfscData;