import React from 'react';
import {connect} from "react-redux"
import SideBarTree from './SideBarTree'
import {getFolders,getIndicators} from '../../action/action-folders'




class SideBarTreeContainer extends React.Component {
    
    componentDidMount(){
        
            this.props.getFolders(this.props.compID)
            this.props.getIndicators(this.props.compID)
        
        
    }
    
    
    
    render(){
        return ( <>
                     <SideBarTree {...this.props} />
                </>)
    }

}

const mapStateToProps = (state) => ({
    compID: state.folders.compID,
    folders: state.folders.folders,
    indicators: state.folders.Indicator,
    nameComp: state.folders.nameComp,
    
  })

  
export default connect(mapStateToProps,{getFolders,getIndicators}) (SideBarTreeContainer)