import React from 'react';
import {connect} from "react-redux"
import LoginForm from '../components/LoginForm'
import {withAuthRedirect} from '../hoc/Redirect'

const Auth = (props) => {
    return( <LoginForm/> )
}


const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuthOperator
  })

let AuthredirectComponent = withAuthRedirect(Auth)


export default connect(mapStateToProps,) (AuthredirectComponent)