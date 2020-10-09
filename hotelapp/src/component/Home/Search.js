import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:''
        }
    }
    render(){
        console.log("state>>>",this.state.location)
        return(
           <div className="imageContainer">
               <div id="logo">
                   D!
               </div>
               <div className="heading">
                   Plan Trip With Us
               </div>
               <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>----SELECT CITY-----</option>
                    </select>
                    <select className="reataurantsinput">
                        <option>----SELECT HOTEL-----</option>
                    </select>
               </div>
           </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
        .catch((err) => {console.log(err)})
    }
    
}

export default Search