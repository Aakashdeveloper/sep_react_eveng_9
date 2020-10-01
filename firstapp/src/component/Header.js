import React,{Component} from 'react';

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
    }

    render(){
        console.log("i m in render")
        return(
            <React.Fragment>
                <center>
                    <h2>{this.state.title}</h2>
                    <input onChange={this.handleChange} />
                    <div>{this.state.keyword}</div>
                </center>
                <hr/>
            </React.Fragment>
        )
    }
}

export default Header;

/*
const Header = () => {
    return(
        <React.Fragment>
            <center>
                <h2>React App</h2>
            </center>
            <hr/>
        </React.Fragment>
    )
}

var React = require('react');

function Header(){
    return(
        <header>
            <center>
                <h2>React App</h2>
            </center>
            <hr/>
        </header>
    )
}

module.exports = Header
*/