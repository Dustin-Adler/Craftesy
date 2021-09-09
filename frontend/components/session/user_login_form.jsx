import React from "react";

class UserLoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user
    }

    update(field){
        return (e) => {
            this.setState(
                {[field]: e.currentTarget.value},
            )
        }
    }

    handleSubmit(){
        this.props.login(this.state)
        .then(()=>this.props.closeModal())
    }

    render() {
        return(
            <div  className='modal-form'>
                <div className='form-type'>{this.props.formType}</div>
                <form onSubmit={() => this.handleSubmit()} className='form-items'>
                    <h5 className='form-field-name'>Password</h5>   
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    <div><button className='submit-button'>Login</button></div>
                </form>
            </div>
        )
    }
}

export default UserLoginForm;