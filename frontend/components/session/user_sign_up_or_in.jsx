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

    renderErrors() {
        return(
          <ul className='errors-list'>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`} className='error'>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    signInOrSignUp(e){
        e.preventDefault()
        this.props.getAccountFromEmail(this.state.email)
        .then( res => {
            if (res.user.id){
                this.setState({formNum: 1})
            } 
            else if (!res.user.email){
                this.setState({formNum: 0})
            } 
            else {
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
                        <p className="form-instructions">Sign in or register with your email address</p>
                        <form onSubmit={this.signInOrSignUp} className='form-items'>
                            <h5 className='form-field-name'>Email address</h5> 
                            <input 
                                className="form-field-text"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')} />
                            {this.renderErrors()}
                            <div><button className='submit-button'>Continue</button></div>
                        </form>
                        <div className='separator'>
                            <div className='text'>OR</div>
                            <div className='line'></div>
                        </div>
                        <button 
                            className='submit-button'
                            onClick={()=>this.props.login({
                                email: 'demo@account.id',
                                password: 'password',
                            }).then(()=>this.props.closeModal())}>
                            Demo login
                        </button> 
                    </div>
                )
                break;
            case 1:
                return <UserLoginForm 
                    user={this.state} 
                    login={this.props.login} 
                    closeModal={this.props.closeModal} 
                    errors={this.props.errors} 
                    clearErrors={this.props.clearErrors} 
                    formType='Login'/>
                    
                break;
            case 2:
                return <UserRegisterForm 
                    user={this.state}
                    registerAccount={this.props.registerAccount}
                    login={this.props.login}
                    closeModal={this.props.closeModal}
                    errors={this.props.errors}
                    clearErrors={this.props.clearErrors}
                    formType='Register'/>
                break;
            default:
                break;
        }     
    }
}

export default SignInOrSignUp;