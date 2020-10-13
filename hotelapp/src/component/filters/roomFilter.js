import React,{Component} from 'react';
import axios from 'axios';

class RoomFilter extends Component {
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div>
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