import React from 'react';
import { MDBCol, MDBTreeview} from 'mdbreact';
import ShowTree from './treeView';
import s from './style.module.css'

const SideBarTree = (props) => {

    

    const {folders,compID,indicators} = props
    
    return(
        <MDBCol md='3' className={s.fs}>
            <MDBTreeview theme='animated'  header='Folders'  className='w-20' >
                <ShowTree folders = {folders}  compID = {compID}  indicators = {indicators}/>
            </MDBTreeview>

        </MDBCol>
    )
}

export default SideBarTree