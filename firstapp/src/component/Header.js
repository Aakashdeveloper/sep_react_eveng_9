import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Text Here'
        }

        console.log("i m in constructor")
    }

    handleChange=(event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange} />
                        <div style={{color:"white"}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </React.Fragment>
        )
    }
}

export default Header;