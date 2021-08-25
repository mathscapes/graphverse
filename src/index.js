import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, About, Search, Graph } from "./components";
import "./style.scss";
import GraphList from './graphlist.json';
import { Helmet } from 'react-helmet';

// const head = `
//     <meta charSet="utf-8" />
//     <script async src="https://www.googletagmanager.com/gtag/js?id=G-QX826LQMSL"></script>
//     <script>
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){ dataLayer.push(arguments); }
//         gtag('js', new Date());
//         gtag('config', 'G-QX826LQMSL');
//     </script>
// `;

function App() {
    document.title = "Graphverse";
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



