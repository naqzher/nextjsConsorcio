import React,{Component} from 'react';
import fetch from 'isomorphic-unfetch';

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }

    // Obtengo datos por tecleada y seteo el state
    handleChange = input => e => {
        this.setState({ [input]: event.target.value });
    };

    login = async e => {
        e.preventDefault();
        
        const datos = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(JSON.stringify(datos))


        try {
            // const response = await fetch(url, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify( datos )
            // })
        } catch (error) {
            
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form onSubmit={this.login}>
                                {/* Email */}
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.handleChange("email")} />
                                </div>
                                {/* Password */}
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange("password")} />
                                </div>
                                {/* Button */}
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
