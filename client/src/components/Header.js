import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">Titel/Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/surveys">Dashboard</a></li>
            <li><a href="/surveys/new">Neuer Eintrag</a></li>
            <li><a href="/auth/google">Sign in with Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
