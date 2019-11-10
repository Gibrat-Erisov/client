import React from 'react';
import {connect} from "react-redux"
import SideBarTree from '../components/SideBarTree'
import {withAuthRedirect} from '../hoc/withAuthRedirect'


class Diagram extends React.Component {

    render(){
        return <SideBarTree/>
        
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuthOperator,
    isAuthOperator: state.authData.tokenOperator
  })

let AuthredirectComponent = withAuthRedirect(Diagram)


export default connect(mapStateToProps,) (AuthredirectComponent)