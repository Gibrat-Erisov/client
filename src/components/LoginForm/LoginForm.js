import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import s from './style.module.css'

const FormPage = (props) => {
  return (
    <MDBContainer>
      <MDBRow className = {s.Box}>
        <MDBCol md="5" >
          <MDBCard >             
            <MDBCardBody className="mx-4">
              
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              
              <div>{props.ErrorAuth}</div>
              <MDBInput onChange = {props.InputChange}  name = "email" label="Your login" group type="email" validate  error="wrong" success="right" />
              <div>{props.ErrorEmail}</div>
              <MDBInput onChange = {props.InputChange}  name = 'password' label="Your password"  group type="password" validate containerClass="mb-0" />
              <div>{props.ErrorPassword}</div>
              <div className="text-center mb-3">
                <MDBBtn disabled = {props.isButtonClicked}  type="button"  gradient="blue" rounded  className="btn-block z-depth-1a" onClick = {props.handleSubmit}>
                  Sign in
                </MDBBtn>
              </div>
              
            </MDBCardBody>            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;