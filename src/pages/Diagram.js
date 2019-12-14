import React from 'react';
import {connect} from "react-redux"
import SideBarTree from '../components/SideBarTree'
import CreateFolderForm from '../components/createFolder'
import { MDBRow } from 'mdbreact';
import {withAuthRedirect} from '../hoc/withAuthRedirect'




class Diagram extends React.Component {

    render(){
        return (
        <MDBRow >
            <SideBarTree/>
            {this.props.showFoldeCreateBox && <CreateFolderForm />}
        </MDBRow>)
        
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuthOperator,
    isAuthOperator: state.authData.tokenOperator,
    showFoldeCreateBox: state.folders.showFoldeCreateBox,
  })

let AuthredirectComponent = withAuthRedirect(Diagram)


export default connect(mapStateToProps,) (AuthredirectComponent)