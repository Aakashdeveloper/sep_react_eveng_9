import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
    return(
        <Fra/.gment>
            <Header/>
            <h1>Hi To React</h1>
            <h2>Welcome Developer</h2>
            <Footer/>
        </Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))