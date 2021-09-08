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
        
        // this.props.getUserByEmail(this.state)
        // {'user'{email: "email"}}
        // if (user.email){
        //     <user_login_form user={user}/>
        // } else {
        //     <user_register_form user={user}/>,
        // }
        
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