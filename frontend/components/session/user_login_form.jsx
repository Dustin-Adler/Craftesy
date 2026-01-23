import React from "react";

class UserLoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user
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

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(){
        this.props.login(this.state)
        .then(()=>this.props.closeModal())
        .then(()=>this.props.removeGuest())
    }

    render() {
        return(
            <div  className='modal-form'>
                <div className='form-type'>{this.props.formType}</div>
                <form onSubmit={() => this.handleSubmit()} className='form-items'>
                    <h5 className='form-field-name'>Password</h5>   
                    <input 
                        className="form-field-text"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    {this.renderErrors()}
                    <div><button className='submit-button'>Login</button></div>
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

export default UserLoginForm;