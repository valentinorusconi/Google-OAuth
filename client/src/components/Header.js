import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google"> Sign in with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout"> Logout </a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper purple darken-3">
        <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <Link to={this.props.auth? "/dashboard" : "/"} className="brand-logo left">
            Titel/Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <ul className="side-nav" id="mobile">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
