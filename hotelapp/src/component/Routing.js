import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import ListingApi from './listing/ListingApi';
import HotelDetailsApi from './details/hotelDetailsapi';
import PlaceBooking from './Booking/PlaceBooking';
import ViewBooking from './Booking/ViewBooking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list/:id" component={ListingApi}/>
                    <Route exact path="/details/:id" component={HotelDetailsApi}/>
                    <Route exact path="/booking/:id" component={PlaceBooking}/>
                    <Route exact path="/viewBooking" component={ViewBooking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;