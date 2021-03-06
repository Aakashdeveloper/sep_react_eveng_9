import React,{Component} from 'react';

const registerurl= "http://localhost:5000/api/auth/register";

class RegisterComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword= (event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        fetch(registerurl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Register Component
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="username" value={this.state.name}
                            className="form-control" onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email}
                            className="form-control" onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="password" value={this.state.password}
                            className="form-control" onChange={this.handleChangePassword}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;