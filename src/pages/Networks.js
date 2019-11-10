import React from 'react';
import {connect} from "react-redux"
import NetworkSettings from '../components/NetworkSettings'
import {withAuthRedirect} from '../hoc/withAuthRedirect'


class NetworkSettingsContainer extends React.Component {

    render(){
        return <NetworkSettings/>
        
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuthOperator,
    
  })

let AuthredirectComponent = withAuthRedirect(NetworkSettingsContainer)


export default connect(mapStateToProps,) (AuthredirectComponent)