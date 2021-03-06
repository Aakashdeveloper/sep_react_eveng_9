import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HotelDisplay = (props) => {
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-11">
                            <h3>{props.hoteldata.name}</h3>
                        </div>
                        <div className="col-md-1">
                            <Link to={`/list/${sessionStorage.getItem('tripid')}`} className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-responsive" src={props.hoteldata.thumb}
                            style={{width:1500,height:400}}/>
                        </div>
                        <div className="col-md-12">
                            <h3>{props.hoteldata.name}</h3>
                            <h3>{props.hoteldata.locality}</h3>
                            <h3>{props.hoteldata.address}</h3>
                        </div>
                        <div>
                            <Tabs>
                                <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                </TabList>
                            
                                <TabPanel>
                                <h2>About This Place</h2>
                                <h3>Cost: Rs.{props.hoteldata.cost}</h3>
                                </TabPanel>
                                <TabPanel>
                                <h2>Contact Us</h2>
                                <h3>Phone:465454756</h3>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <Link to={`/booking/${props.hoteldata._id}`} className="btn btn-success">Book Hotel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDisplay;