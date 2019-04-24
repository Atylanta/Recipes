import React, { Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../index.css';
import Nickname from "./Nick-name";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";


class Navbar extends Component {

    // state == SignIn ? log == 'Log in' : log == 'Log Out'

    render () {
        //if  USER is login ==show nickname


        return (
            <div className="nav-wrapper d-flex">
                <nav className="nav d-flex">
                    <SignedOutLinks/>
                </nav>
                {/*<Nickname/>*/}
            </div>
        )
    }
}

export default withRouter(Navbar);