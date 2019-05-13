import React from 'react';
//import { withRouter } from 'react-router-dom';
import '../index.css';
import Nickname from "./Nick-name";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    const nick = auth.uid ? <Nickname profile={profile}/> : null;
        return (
            <div className="nav-wrapper d-flex">
                <nav className="nav d-flex">{ links }</nav>
                { nick }
            </div>
        )
};

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Navbar);