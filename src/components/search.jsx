import React from "react";
import { Link, withRouter } from 'react-router-dom';

function handleSearch() {
    var input, filter, name;
    input = document.getElementById("searchbox");
    console.log(input.value);
    filter = input.value.toUpperCase();
    let links = document.getElementsByClassName("graph-link");
    for (let i = 0; i < links.length; i++) {
        let a = links[i];
        name = a.innerText;
        if (name.toUpperCase().indexOf(filter) > -1) {
            a.style.display = "";
        } else {
            a.style.display = "none";
        }
    }
}

function Search(props) {
    return (
        <div>
            <div className="search-container">
                <input type="text" id="searchbox" onKeyUp={handleSearch} placeholder="Search Graphverse.." />
                <div className="results">
                    {
                        props.items.map(graph => (
                            <Link key={graph.id} className="graph-link" to={"/graph/" + graph.id}>{graph.name}
                                <div>
                                    {graph.tags.map((value, index) => {
                                        return <span key={index}>{value}</span>
                                    })}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default withRouter(Search);