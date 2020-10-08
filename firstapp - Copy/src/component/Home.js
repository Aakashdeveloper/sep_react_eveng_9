import React,{Fragment,Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*var a = [34,45,36,25,64,12,28]
a.filter((data) => { return data>25})
    */

    filterNews = (keyword) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <Fragment>
                <Header userText={(userinput) => { this.filterNews(userinput)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year={2021} month={'Oct'}/>
            </Fragment>
        )
    }
}


export default Home;