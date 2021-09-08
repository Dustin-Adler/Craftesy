import React from "react";

class userLoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;
        
    }

    update(field){
        return (e) => {
            this.setState(
                {[field]: e.currentTarget.value},
            )
        }
    }

    render() {
        return(
            <div>
                <div className='form-type'>{this.props.formType}</div>
                <form onSubmit={() => this.props.login(this.state)}>
                    <label>Password: 
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default userLoginForm;