import React from "react";
import user_register_form from "./sign_up_or_sign_in_container";
import user_login_form from "./sign_up_or_sign_in_container";

class SignInOrSignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;  
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    SignInOrSignUp(){
        debugger
        const something = this.props.getUserByEmail(this.state.email)
        debugger
        this.setState({email: something.email})

        if (this.state.email){
            <user_login_form user={this.state}/>
        } else {
            <user_register_form user={this.state}/>
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