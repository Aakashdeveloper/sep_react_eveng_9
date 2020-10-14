import React,{Component} from 'react';
import axios from 'axios';
import HotelDisplay from './HotelDetailsDisplay';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class HotelDetails extends Component{
    constructor(){
        super()

        this.state={
            hotel:''
        }
    }

    render(){
        return(
            <HotelDisplay hoteldata={this.state.hotel}/>
        )
    }

    async componentDidMount(){
        var hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({hotel:response.data[0]})
    }

    /*componentDidMount(){
        var hotelid = this.props.match.params.id;
        axios.get(`${url}/${hotelid}`)
        .then((response) => {this.setState({hotel:response.data})})
    }*/
}

export default HotelDetails