import React from "react";
import userRegisterForm from "../user/user_register_form";
import userLoginForm from "./user_login_form";

class SignInOrSignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;  
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    SignInOrSignUp(){
        let something = this.props.getAccountFromEmail(this.state.email)
        this.setState({email: something.email})

        if (this.state.email){
            return <userLoginForm user={this.state}/>
        } else {
            return <userRegisterForm user={this.state}/>
        }
    }

    render() {
        return(
            <div>
                <div className='form-type'>{this.props.formType}</div>
                
                <form onSubmit={() => this.SignInOrSignUp()}>
                    <label>Email: 
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <button>Continue</button>
                </form>
            </div>
        )
    }
}

export default SignInOrSignUp;