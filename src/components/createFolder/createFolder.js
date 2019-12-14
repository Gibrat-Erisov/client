import React from 'react';
import {  MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import s from './style.module.css'

const createFolderForm =(props)=>{
    return(<MDBCol md="5" >
                <MDBCard className={s.Box}>             
                    <MDBCardBody className="mx-4"> 
                        <div>{props.ErrorText}</div>                       
                        <MDBInput  onChange = {props.InputChange} name = 'folder' label="folder name"  group  validate containerClass="mb-0" />                      
                        <div className="text-center mb-3">
                        <MDBBtn type="button"  
                                gradient="blue" 
                                rounded  
                                className="btn-block z-depth-1a" 
                                onClick={props.handleSubmit} >
                            Create folder
                        </MDBBtn>
                        </div> 
                    </MDBCardBody>            
                </MDBCard>
        </MDBCol>)
}

export default createFolderForm