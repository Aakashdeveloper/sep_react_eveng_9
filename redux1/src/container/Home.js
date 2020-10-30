import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions';
import PropTypes from 'prop-types';
import DisplayMovie from '../component/displayMovies';


class Home extends Component{
    componentDidMount(){
        this.props.dispatch(moviesList())
    }
    render(){
        return(
            <div>
                <DisplayMovie datalist={this.props.mydata}/>
            </div>
        )
    }
}

//To recive state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

//to Dispatch the action
Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);