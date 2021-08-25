import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, About, Search, Graph } from "./components";
import "./style.scss";
import GraphList from './graphlist.json';
import GA4React from 'ga-4-react';
// import Twemoji from 'react-twemoji';

function App() {
    // const ga4react = new GA4React('G-QX826LQMSL');
    // ga4react.initialize();
    // ReactGA.pageview(window.location.pathname + window.location.search);

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

try {
    setTimeout(_ => {
        const ga4react = new GA4React("G-QX826LQMSL");
        ga4react.initialize();
    }, 4000);
} catch (err) { }



