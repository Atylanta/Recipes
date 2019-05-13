import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import {connect} from 'react-redux';
import {logOut} from "../store/actions/authActions";


const SignedInLinks = (props) => {
    return (
        <ul className="d-flex">
            <li className='nav-list'>
                <Link to="/recipes" className='header-links'>Recipes</Link>
                <ul className="sub-item">
                    <li>
                        <Link to="/meat" className='dropdown'>Meat</Link>
                    </li>
                    <li>
                        <Link to="/fish" className='dropdown'>Fish</Link>
                    </li>
                    <li>
                        <Link to="/deserts" className='dropdown'>Deserts</Link>
                    </li>
                </ul>
            </li>
            <li className='nav-list'>
                <Link to="/add_recipe" className='header-links'>Add Recipe</Link>
            </li>

            <li className='nav-list'>
                <button className='header-links but' onClick={props.logOut}>Log out</button>
            </li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);