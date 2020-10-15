import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist"

class RoomFilter extends Component {
    roomfilter = (event) => {
        let roomtype= event.target.value;
        let Tripid = sessionStorage.getItem('tripid');
        let rrurl;
        if(roomtype==""){
            rrurl=`${rurl}/${Tripid}`
        }else{
            rrurl=`${rurl}/${Tripid}?roomtype=${roomtype}`
        }

        axios.get(rrurl)
        .then((response) => {this.props.roomPerType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.roomfilter}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomFilter;