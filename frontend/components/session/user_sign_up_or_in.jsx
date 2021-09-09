import React from "react";
import UserRegisterForm from "../user/user_register_form";
import UserLoginForm from './user_login_form'

class SignInOrSignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;  
        this.signInOrSignUp = this.signInOrSignUp.bind(this)
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    signInOrSignUp(){
        this.props.getAccountFromEmail(this.state.email)
        .then( res => {
            if (res.user.id){
                this.setState({formNum: 1})
            } else {
                this.setState({formNum: 2})
            }
        })
    }

    render() {
        switch (this.state.formNum) {
            case 0:
                return(
                    <div className='modal-form'>
                        <div className='form-type'>{this.props.formType}</div>

                        <form onSubmit={this.signInOrSignUp} className='form-items'>
                            <h5 className='form-field-name'>Email address</h5> 
                            <input 
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')} />
                            <div><button className='submit-button'>Continue</button></div>
                        </form>
                    </div>
                )
                break;
            case 1:
                return <UserLoginForm 
                    user={this.state} 
                    login={this.props.login} 
                    closeModal={this.props.closeModal}
                    formType='Login'/>
                break;
            case 2:
                return <UserRegisterForm 
                    user={this.state} 
                    registerAccount={this.props.registerAccount} 
                    login={this.props.login} 
                    closeModal={this.props.closeModal} 
                    formType='Register'/>
                break;
            default:
                break;
        }     
    }
}

export default SignInOrSignUp;