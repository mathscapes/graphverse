import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, About, Search, Graph } from "./components";
import "./style.scss";
import GraphList from './graphlist.json';
import ReactGA from 'react-ga';
// import Twemoji from 'react-twemoji';

function App() {
    ReactGA.initialize('G-8ZZD995QBV');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={() => <Search items={GraphList} />} />
                    <Route exact path="/search" component={() => <Search items={GraphList} />} />
                    <Route exact path="/about" component={() => <About data="data" />} />
                    <Route path="/graph/:id" component={() => <Graph />} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



