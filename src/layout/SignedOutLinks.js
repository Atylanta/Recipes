import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

class SignedOutLinks extends Component {
    render() {
        return (
            <ul className="d-flex">
                <li className= 'nav-list'>
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
                <li className= 'nav-list'>
                    <Link to="/authentication" className='header-links'>Sign In</Link>
                </li>
                <li className= 'nav-list'>
                    <Link to="/login" className='header-links'>Log in</Link>
                </li>
            </ul>
        );
    }
}

export default SignedOutLinks;