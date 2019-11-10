import React from "react";
import {connect} from "react-redux"
import LoginForm from './LoginForm'
import {updateTextLogin,
        updateTextPassword , 
        updateErrorLogin, 
        updateErrorPassword,
        gatOperator,
        updateErrorAuth,
        setButtonClickedTrue} from '../../action/action-auth'



class LoginFormContainer extends React.Component {

  validate = () =>{
    let valid = true

    if(!this.props.email){
        this.props.updateErrorLogin('Заполните email')
        valid = false
    }
    else this.props.updateErrorLogin('')

    if(!this.props.password){
        this.props.updateErrorPassword('Заполните пароль')
        valid = false
    }
    else this.props.updateErrorPassword('')
    return valid
  }

  handleSubmit = (event) =>{
    event.preventDefault()
      this.props.updateErrorAuth('')
      if( this.validate()) {
        this.props.setButtonClickedTrue()
        this.props.gatOperator(this.props.email, this.props.password)
        
      }
  }

  InputChange = (event) =>{
    event.preventDefault()
    const { name, value } = event.target
         
    switch(name){
      case 'email':
          this.props.updateTextLogin(value)         
        break

      case 'password':          
          this.props.updateTextPassword(value)
        break

      default:
        break
    }
    
  }



  render(){
        return <LoginForm {...this.props}
                  InputChange = {this.InputChange}
                  handleSubmit = {this.handleSubmit}/>
    }
}

const mapStateToProps = (state) => ({
  email: state.authData.email,
  password: state.authData.password,
  ErrorEmail: state.authData.ErrorEmail,
  ErrorPassword: state.authData.ErrorPassword,
  ErrorAuth: state.authData.ErrorAuth,
  isButtonClicked: state.authData.isButtonClicked
  })


export default connect(mapStateToProps,{
                                updateTextLogin,
                                updateTextPassword, 
                                updateErrorLogin, 
                                updateErrorPassword,
                                gatOperator,updateErrorAuth,
                                setButtonClickedTrue
                                }) (LoginFormContainer)