import React, {Component} from 'react';
import '../css/login.css';


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
        console.log(this.state)
    };

    render() {
        return (
            <div className='aligned-center'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='title'>Sign In</h4>
                    <div className='with-margin'>
                        <label htmlFor="email"></label>
                        <input type="email" placeholder='Email' id='email' className='input-line' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" placeholder='Password' id='password' className='input-line' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="btn">Login</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Login;