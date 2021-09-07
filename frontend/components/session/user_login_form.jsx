import React from "react";

class userLoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;
        
    }

    update(field){
        return (e) => {
            this.setState(
                {[field]: e.currentTarget.value},
            )
        }
    }

    render() {
        return(
            <div>
                <h5>{this.props.formType}</h5>
                <form onSubmit={() => this.props.login(this.state)}>
                    <label>Email: 
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <label>Password: 
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default userLoginForm;