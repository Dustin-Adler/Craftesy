import React from "react";
import user_register_form from "./user_login_form_container";
import user_login_form from "./user_login_form_container";

class SignInOrSignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;  
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    SignInOrSignUp(){
        
        <user_register_form />,
        <user_login_form/>
        
    }

    render() {
        return(
            <div>
                <div className='form-type'>{this.props.formType}</div>
                <form onSubmit={() => this.props.login(this.state)}>
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