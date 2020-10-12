import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }
    handleChangeCity = (event) => {
        console.log(event.target.value)
        const cityid = event.target.value;
        fetch(`${hurl}${cityid}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
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
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>----SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>----SELECT HOTEL-----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
               </div>
           </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())  //reslove promise
        .then((data) => {this.setState({location:data})})  //recive data from promise of above step
        .catch((err) => {console.log(err)})
    }
    
}

export default Search