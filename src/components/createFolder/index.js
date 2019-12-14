import React from 'react';
import CreateFolderForm from './createFolder'
import {connect} from "react-redux"
import {updateNameFolder} from '../../action/action-folders'

 

class createFolderContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ErrorText : ''
        }
    }


    componentDidMount(){     
            
    }

    validate = () =>{
        if(!this.props.folderName)
        {
            this.setState({ErrorText : 'Заполните имя папки'}) 
            return false
        }
        return true
      }
    
      handleSubmit = () =>{
        
        this.setState({ErrorText : ''}) 
          if( this.validate()) {
            alert('hhh')
          }
      }

    InputChange = (event) =>{
        event.preventDefault()
        const { value } = event.target
        this.props.updateNameFolder(value)
      }
    
    
    render(){
        return  <CreateFolderForm   {...this.props} 
                                    InputChange={this.InputChange}
                                    handleSubmit={this.handleSubmit} 
                                    ErrorText={this.state.ErrorText}/>
    }

}

const mapStateToProps = (state) => ({
    folderID: state.folders.folderID,
    folderName: state.folders.folderName,
    indicatorName: state.folders.indicatorName
  })

  
export default connect(mapStateToProps,{updateNameFolder}) (createFolderContainer)