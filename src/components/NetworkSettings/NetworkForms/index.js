import React from "react";
import { MDBCol, MDBInput, MDBBtn ,MDBCardBody,MDBCard} from 'mdbreact';
import s from './style.module.css'


const FormPage = (props) => {
  return (
        <MDBCol md="4" >
            <MDBCard >             
              <MDBCardBody className="mx-4">
                <MDBInput label="Network Name" name='networkName' onChange={props.InputChange}/>
                <MDBInput label="User database" name='user' onChange={props.InputChange}/>
                <MDBInput label="Password " name='password' onChange={props.InputChange}/>
                <MDBInput label="Server" name='server' onChange={props.InputChange}/>
                <MDBInput label="Port" name='port' onChange={props.InputChange}/>
                <MDBInput label="Database" name='database' onChange={props.InputChange}/>
                <div className={s.BTNBOX}>
                  <MDBBtn disabled  type="button"  gradient="blue" rounded  className="btn-block z-depth-1a" onClick={props.handleSubmit} >
                    Set new Network
                  </MDBBtn>
                </div>
              </MDBCardBody>            
            </MDBCard>
          </MDBCol>    
  );
};

export default FormPage;