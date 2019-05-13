import React, {Component} from 'react';
import '../css/login.css'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)

    };

    render() {
        const { authError, auth } = this.props;
        if (auth.uid ) return <Redirect to='/'/>

        return (
            <div className='aligned-center'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='title'>Login</h4>
                    <div className='with-margin'>
                        <label htmlFor="email"></label>
                        <input type="email" placeholder='Email' id='email' className='input-line' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" placeholder='Password' id='password' className='input-line' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="btn" id='loginBtn'>Login</button>
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
