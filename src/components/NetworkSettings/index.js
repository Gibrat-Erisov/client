import React from "react";
import {connect} from "react-redux"
import NetworkSettings from './NetworkSettings'
import {getNetworks} from '../../action/action-network'




class NetworkSettingsContainer extends React.Component {

  componentDidMount() {
    this.props.getNetworks(this.props.idCompany)
  }

  validate = () =>{
    
  }

  handleSubmit = (event) =>{
    event.preventDefault()
      
      if( this.validate()) {
        
        
      }
  }

  InputChange = (event) =>{
    event.preventDefault()
    const { name, value } = event.target
         debugger
    switch(name){
      case 'email':
          // this.props.updateTextLogin(value)         
        break

      case 'password':          
          // this.props.updateTextPassword(value)
        break

      default:
        break
    }
    
  }



  render(){
        return <NetworkSettings {...this.props} 
                                InputChange={this.InputChange}
                                handleSubmit={this.handleSubmit} />
    }
}

const mapStateToProps = (state) => ({
  idCompany: state.authData.idCompany,
  networks: state.networks.networks
})


export default connect(mapStateToProps,{getNetworks}) (NetworkSettingsContainer)