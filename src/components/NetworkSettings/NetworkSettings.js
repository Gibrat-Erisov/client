import React from "react";
import { MDBContainer, MDBRow} from 'mdbreact';
import NetworkForms from './NetworkForms'
import NetworkList from './NetworkList'
import s from './style.module.css'

const NetworkSettings = (props) => {
  const {networks} = props 
  return (
    <MDBContainer fluid>
      <MDBRow className={s.Box}>
        
          <NetworkList  className={s.NetworkList} 
                        networks={networks}
                        />

          <NetworkForms className = {s.NetworkForms}
                        InputChange={props.InputChange}
                        handleSubmit={props.handleSubmit}/>
        
      </MDBRow>
    </MDBContainer>
  );
};

export default NetworkSettings;