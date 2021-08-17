import React from "react";
import ReactDOM from "react-dom";
import ForceGraph3D from 'react-force-graph-3d';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Vector3, LineBasicMaterial, MeshBasicMaterial, MeshLambertMaterial, FogExp2 } from 'three';
import { useParams, withRouter } from "react-router-dom";
import pic from "../img/image.png";
import Twemoji from 'react-twemoji';

// const { useMemo, useState, useCallback, useRef } = React;

const extraRenderers = [new CSS2DRenderer()];
const mat1 = new LineBasicMaterial({ color: "#c5c3c6" });
const mat2 = new LineBasicMaterial({ color: "#5c646c" });

function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

function distanceVector(v1, v2) {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function getNode(nodes, id) {
    return nodes.find(node => node.id === id);
}

function getLink(links, src_id, dest_id) {
    return links.find(link =>
        ((link.source.id === src_id) && (link.target.id === dest_id)) ||
        ((link.source.id === dest_id) && (link.target.id === src_id)));
}

function compileGraph(obj) {
    let meta = obj.meta;
    let nodes = obj.data.nodes;
    let links = obj.data.links;

    links.forEach(link => {
        const a = getNode(nodes, link.source);
        const b = getNode(nodes, link.target);
        !a.neighbors && (a.neighbors = []);
        !b.neighbors && (b.neighbors = []);
        a.neighbors.push(b.id);
        b.neighbors.push(a.id);
    });

    return { meta, data: { nodes: nodes, links: links } };
}


function setNodeOpacity(cam, node, nodeEl) {
    let pos = new Vector3(0, 0, 0);

    if (node.x) {
        pos = new Vector3(node.x, node.y, node.z);
    }

    let dist = distanceVector(cam.position, pos);

    let op = map(dist, 500, 0, 0, 1);
    nodeEl.style.opacity = op;
}

function setImageSize(cam, node, nodeEl) {
    let pos = new Vector3(0, 0, 0);

    if (node.x) {
        pos = new Vector3(node.x, node.y, node.z);
    }

    let dist = distanceVector(cam.position, pos);

    let size = map(dist, 500, 0, 50, 200);
    return size;
}

const node_active = (cam, node) => {
    const nodeEl = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = node.name;
    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.image) {
        const img = document.createElement('img');
        img.src = node.image;
        img.className = 'image';
        img.style.height = `5rem`;
        nodeEl.appendChild(img);
    }
    else if (node.emoji) {
        // let t = React.createElement(Twemoji, {className:'twemoji', folder:'svg', ext:'.svg' }, node.emoji);

        // let t = <Twemoji emoji={node.emoji} />;
        // ReactDOM.render(t, nodeEl);
        let s = document.createElement('span');
        s.innerText = node.emoji;
        nodeEl.appendChild(s);
    }
    nodeEl.appendChild(p);
    nodeEl.className = 'node-label active';
    return new CSS2DObject(nodeEl);
}

const node_default = (cam, node) => {
    const nodeEl = document.createElement('div')
    const p = document.createElement('p');
    p.textContent = node.name;
    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.image) {
        const img = document.createElement('img');
        img.src = node.image;
        img.className = 'image';
        img.style.height = `5rem`;
        nodeEl.appendChild(img);
    }
    else if (node.emoji) {
        // let t = React.createElement(Twemoji, {className:'twemoji', folder:'svg', ext:'.svg' }, node.emoji);

        // let t = <Twemoji emoji={node.emoji} />;
        // ReactDOM.render(t, nodeEl);
        let s = document.createElement('span');
        s.innerText = node.emoji;
        nodeEl.appendChild(s);
    }

    nodeEl.className = 'node-label default';

    nodeEl.appendChild(p);
    return new CSS2DObject(nodeEl);
}

const node_dim = (cam, node) => {
    let nodeEl = document.createElement('div');
    nodeEl.className = 'node-label';

    const p = document.createElement('p');
    
    p.textContent = node.name;
    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.image) {
        const img = document.createElement('img');
        img.src = node.image;
        img.className = 'image';
        img.style.height = `5rem`;
        nodeEl.appendChild(img);
    }
    else if (node.emoji) {
        // let t = React.createElement(Twemoji, {className:'twemoji', folder:'svg', ext:'.svg' }, node.emoji);

        // let t = <Twemoji emoji={node.emoji} />;
        // ReactDOM.render(t, nodeEl);
        let s = document.createElement('span');
        s.innerText = node.emoji;
        nodeEl.appendChild(s);
    }

    nodeEl.appendChild(p);

    setNodeOpacity(cam, node, nodeEl);
    return new CSS2DObject(nodeEl);
}


class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.onNodeClick = this.onNodeClick.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
        this.ref = React.createRef();

        this.hoverNode = null;
        this.highlightNodes = new Set();
        this.highlightLinks = new Set();

        this.addNodeToHighlighted = this.addNodeToHighlighted.bind(this);
        this.addLinkToHighlighted = this.addLinkToHighlighted.bind(this);
        this.resetHighlights = this.resetHighlights.bind(this);
        this.nodeObject = this.nodeObject.bind(this);
        this.linkMaterial = this.linkMaterial.bind(this);
        this.fogValueChanged = this.fogValueChanged.bind(this);
        this.onNodeRightClick = this.onNodeRightClick.bind(this);
        this.state = {
            count: 0,
            fogValue: 0.005
        };

    }

    resetHighlights() {
        this.hoverNode = null;
        this.highlightNodes = new Set();
        this.highlightLinks = new Set();
    }

    addNodeToHighlighted(node) {
        this.highlightNodes.add(node);
    }

    addLinkToHighlighted(link) {
        this.highlightLinks.add(link);
    }

    onNodeClick(node) {
        // console.log("entered onNodeClick");

        if ((!node && !this.highlightNodes.size) || (node && this.hoverNode === node)) return;
        this.resetHighlights();

        if (node) {
            this.addNodeToHighlighted(node);
            for (let neighbor of node.neighbors) {
                // console.log("Added " + neighbor + " to highlight");
                this.addNodeToHighlighted(getNode(this.props.data.nodes, neighbor));
                this.addLinkToHighlighted(getLink(this.props.data.links, node.id, neighbor));
            }
        }

        this.hoverNode = node || null;

        this.setState({ count: this.state.count + 1 });
    }

    onLinkClick(link) {
        // console.log("entered onLinkClick");
        this.resetHighlights();

        if (link) {
            this.addLinkToHighlighted(link);
            this.addNodeToHighlighted(link.source);
            this.addNodeToHighlighted(link.target);
        }

        this.setState({ count: this.state.count + 1 });
    }

    onNodeRightClick(node) {
        if (node.url) {
            window.open(node.url, "_blank")
        }
    }

    componentDidMount() {
        let Graph = this.ref.current;
        Graph.scene().fog = new FogExp2(0xffffff, this.state.fogValue);
        Graph.controls().addEventListener('change', Graph.refresh);

    }

    componentWillUnmount() {
        let Graph = this.ref.current;
        document.removeEventListener('change', Graph.controls());
    }

    linkMaterial(link) {
        return this.highlightLinks.has(link) ? mat2 : mat1;
    }

    nodeObject(node) {
        if (this.ref.current) {

            if (this.ref.current.camera()) {
                let cam = this.ref.current.camera();

                if (this.highlightNodes.has(node)) {
                    if (this.hoverNode === node) {
                        return node_active(cam, node);
                    } else {
                        return node_default(cam, node);
                    }
                }
                return node_dim(cam, node);
            }
            return;
        }
        return;
    }

    fogValueChanged(e) {
        this.setState({ fogValue: e.target.value });
        this.ref.current.refresh();
    }

    render() {

        return (
            <div className="graph" >
                {/* <div className="customize" >
                    <div className="title">
                        Customize
                    </div>
                    <div className="customize-controls">
                        <div className="control">
                            <p>Fog distance: {this.state.fogValue}</p>
                            <input type="range" min="0.0001" max="1" value={this.state.fogValue} step="0.0001" className="slider" onChange={this.fogValueChanged} id="fog" />
                        </div>
                        <div className="control">
                            <p>Fog distance: {this.state.fogValue}</p>
                            <input type="range" min="0.0001" max="1" value={this.state.fogValue} step="0.0001" className="slider" onChange={this.fogValueChanged} id="fog" />
                        </div>
                    </div>
                </div> */}
                <ForceGraph3D
                    ref={this.ref}
                    rendererConfig={{ alpha: true }}
                    extraRenderers={extraRenderers}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    graphData={this.props.data}
                    backgroundColor={"rgba(0,0,0,0)"}
                    showNavInfo={false}
                    linkWidth={0.25}
                    warmupTicks={100}
                    nodeRelSize={5}
                    nodeResolution={2}
                    linkResolution={4}
                    nodeOpacity={0}
                    linkMaterial={this.linkMaterial}
                    linkCurvature={0}
                    nodeThreeObject={this.nodeObject}
                    nodeThreeObjectExtend={true}
                    onNodeClick={this.onNodeClick}
                    onLinkClick={this.onLinkClick}
                    onNodeRightClick={this.onNodeRightClick}
                />
            </div>
        );
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var sourceLinks = "", authors = "";
        if (this.props.meta !== null) {
            sourceLinks = this.props.meta.sourceLinks.map((source) =>
                <li key={source.url}><a href={source.url}>{source.title}</a></li>
            );

            authors = this.props.meta.contributedBy.map((author) =>
                <li key={author}><a href={"github.com/" + author}>{author}</a></li>
            );
        }

        return (

            <div className="details">
                <h1>{this.props.meta.name}<span>{this.props.meta.lang}</span></h1>
                <p>{this.props.meta.description}</p>

                <h6>Source</h6>
                <ul>{sourceLinks}</ul>
                <h6>Contributors</h6>
                <ul>{authors}</ul>
                {/* <div className="spacer"></div> */}
                <h6>Graph Actions</h6>
                <div className="actions">
                    <a className="download" href="{this.props.meta.dataSource}">Download</a>
                    <a className="edit" href="{this.props.meta.editLink}">Edit on GH</a>
                </div>

            </div>
        );
    }
}

function GraphHook(props) {
    let { id } = useParams();
    let graph = null;
    let mp = require.resolve(`../raw/${id}.json`);
    if (require.cache[mp]) {
        delete require.cache[mp];
    }
    graph = require(`../raw/${id}.json`);
    let data = compileGraph(graph).data;
    return (
        <div>
            <Graph data={data} />
            <Details meta={graph.meta} />
        </div>
    );
}

export default withRouter(GraphHook);