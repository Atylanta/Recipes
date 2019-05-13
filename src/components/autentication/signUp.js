import React, {Component} from 'react';
import '../../index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/login.css'
import {signUp} from "../../store/actions/authActions";



class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    };

    render() {
        const { authError, auth } = this.props;
        if (auth.uid ) return <Redirect to='/'/>
        return (
            <div className='aligned-center'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='title'>Sign Un</h4>
                    <div className='with-margin'>
                        <label htmlFor="email"></label>
                        <input type="email" id='email' className='input-line' placeholder='Email' onChange={this.handleChange}/>
                    </div>
                    <div className='with-margin'>
                        <label htmlFor="password"></label>
                        <input type="password" placeholder='Password' className='input-line' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='with-margin'>
                        <label htmlFor="firstName"></label>
                        <input type="text" id='firstName' className='input-line' placeholder='First Name' onChange={this.handleChange}/>
                    </div>
                    <div className='with-margin'>
                        <label htmlFor="lastName"></label>
                        <input type="text" id='lastName' className='input-line' placeholder='Last Name' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className='loginError'>
                        { authError ? <p>{authError}</p> : null }
                    </div>

                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
