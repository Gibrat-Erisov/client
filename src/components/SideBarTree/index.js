import React from 'react';
import {connect} from "react-redux"
import SideBarTree from './SideBarTree'
import {getFolders,getIndicators,showFolderCreator} from '../../action/action-folders'





class SideBarTreeContainer extends React.Component {
    
    componentDidMount(){     
      this.props.getFolders(this.props.compID)
      this.props.getIndicators(this.props.compID)      
    }
    
    openFolderCreatorBox = (idFolder) => {
      this.props.showFolderCreator(idFolder)
      
    }
    
    render(){
        return ( <>
                     <SideBarTree {...this.props} openFolderCreatorBox={this.openFolderCreatorBox}/>
                </>)
    }

}

const mapStateToProps = (state) => ({
    compID: state.folders.compID,
    folders: state.folders.folders,
    indicators: state.folders.Indicator,
    nameComp: state.folders.nameComp,
    
  })

  
export default connect(mapStateToProps,{getFolders,getIndicators,showFolderCreator}) (SideBarTreeContainer)