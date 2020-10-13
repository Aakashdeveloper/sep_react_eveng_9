import React,{Component} from 'react';
import axios from 'axios';

class CostFilter extends Component {
    render(){
        return(
            <React.Fragment>
                <center>Cost Type</center>
                <div>
                    <label className="radio">
                        <input type="radio" value="" name="cost"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="cost"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="cost"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,9000" name="cost"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001,20000" name="cost"/>9001-20000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;