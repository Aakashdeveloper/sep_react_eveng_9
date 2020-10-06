import React,{Fragment,Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <NewsList newsdata={this.state.news}/>
                <Footer year={2021} month={'Oct'}/>
            </Fragment>
        )
    }
}


export default Home;