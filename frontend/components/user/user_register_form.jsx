import React from "react";

class UserRegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user;
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(){
        this.props.registerAccount(this.state)
        .then(()=>this.props.login(this.state))
        .then(()=>this.props.closeModal())
    }

    render() {
        return(
            <div className='modal-form'>
                <h5>{this.props.formType}</h5>
                <form onSubmit={() => this.handleSubmit()} className='form-items'>
                    <h5 className='form-field-name'>First Name</h5>
                    <input 
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('first_name')} />
                    <h5 className='form-field-name'>Password</h5>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    <div><button className='submit-button' >Register New Account</button></div>
                </form>
            </div>
        )
    }
}

export default UserRegisterForm;