import React from "react";

class UserRegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user;
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

    handleSubmit(){
        this.props.registerAccount(this.state)
        .then(()=>this.props.login(this.state))
        .then(()=>this.props.closeModal())
    }

    render() {
        return(
            <div className='modal-form'>
                <div className='form-type'>{this.props.formType}</div>
                <form onSubmit={() => this.handleSubmit()} className='form-items'>
                    <h5 className='form-field-name'>First Name</h5>
                    <input 
                        className="form-field-text"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('first_name')} />
                    <h5 className='form-field-name'>Password</h5>
                    <input 
                        className="form-field-text"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    {this.renderErrors()}
                    <div><button className='submit-button' >Register New Account</button></div>
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
    }
}

export default UserRegisterForm;