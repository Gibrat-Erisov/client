import React, { Component } from 'react';
import {
  MDBCol,
  MDBTreeview,
  MDBTreeviewItem
} from 'mdbreact';

class TreeviewExample extends Component {



  render() {
    return (
      
        <MDBCol md='4'>
          <MDBTreeview
            theme='animated'
            header='Networks'
            className='w-20'
            getValue={value => console.log(value)}
          >
            {
              this.props.networks.map( (networks,index) => <MDBTreeviewItem icon='network-wired' title={networks.netWorkName} key={index} />)
            }
            
          </MDBTreeview>
        </MDBCol>
      
    );
  }
}

export default TreeviewExample;