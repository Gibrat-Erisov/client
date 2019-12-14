import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getMovies } from "../../action/action-movies";

class NavbarPageContainer extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return <NavBar />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { getMovies })(NavbarPageContainer);
