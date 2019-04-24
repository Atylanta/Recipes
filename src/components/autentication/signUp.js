import React, {Component} from 'react';
import '../../index.css';

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
        console.log(this.state)
    };

    render() {
        return (
            <div className='aligned-center'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='title'>Sign In</h4>
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
                        <button className="btn">Login</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignUp;