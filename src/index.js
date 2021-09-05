import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, About, Search, Graph } from "./components";
import "./style.scss";
import GraphList from './graphlist.json';
import {useHistory} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
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



