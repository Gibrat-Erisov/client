import React from "react";
import {connect} from "react-redux"
import NavBar from './NavBar'

class NavbarPageContainer extends React.Component {


render() {
  return (<NavBar/>);
  }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps,) (NavbarPageContainer)