import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
    return (
        <div className="Navigation">
            <nav className="navbar">
                <div className="container">
                    <ul className="left">
                        <li><Link className="title" to="/">Graphverse</Link></li>
                    </ul>
                    <ul className="right">
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/contribute">Contribute</Link></li>
                        <li><Link to="/about">About Graphverse</Link></li>
                        <li><Link className="dim" to="/contact">v0.2.0</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Nav);