import React from "react";

class userRegisterForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;
        
    }

    update(field){
        return (e) => {
            this.setState(
                {[field]: e.currentTarget.value}
            )
        }
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h5>{this.props.formType}</h5>
                <form onSubmit={() => this.props.registerAccount(this.state)}>
                    <label>FirstName: 
                        <input 
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')} />
                    </label>
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
                    <button>Register new Account</button>
                </form>
            </div>
        )
    }
}

export default userRegisterForm;