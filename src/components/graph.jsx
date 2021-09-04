import React from "react";
import ReactDOM from "react-dom";
import ForceGraph3D from 'react-force-graph-3d';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Vector3, LineBasicMaterial, AxesHelper, MeshBasicMaterial, MeshLambertMaterial, FogExp2 } from 'three';
import * as THREE from 'three';
import { useParams, withRouter } from "react-router-dom";
import pic from "../img/image.png";
import Twemoji from 'react-twemoji';

// const { useMemo, useState, useCallback, useRef } = React;

const colors = [
    'rgba(26, 27, 32, 1)',
    'rgba(42, 61, 58, 1)',
    'rgba(44, 59, 87, 1)',
    'rgba(57, 62, 70, 1)',
    'rgba(57, 87, 162, 1)',
    'rgba(59, 51, 47, 1)',
    'rgba(62, 120, 106, 1)',
    'rgba(66, 62, 106, 1)',
    'rgba(67, 135, 211, 1)',
    'rgba(72, 129, 133, 1)',
    'rgba(72, 134, 107, 1)',
    'rgba(73, 162, 197, 1)',
    'rgba(85, 67, 119, 1)',
    'rgba(86, 94, 67, 1)',
    'rgba(86, 178, 230, 1)',
    'rgba(88, 66, 58, 1)',
    'rgba(106, 205, 189, 1)',
    'rgba(124, 120, 201, 1)',
    'rgba(126, 196, 116, 1)',
    'rgba(127, 217, 236, 1)',
    'rgba(128, 138, 155, 1)',
    'rgba(134, 134, 136, 1)',
    'rgba(147, 180, 138, 1)',
    'rgba(152, 62, 50, 1)',
    'rgba(154, 64, 96, 1)',
    'rgba(154, 76, 56, 1)',
    'rgba(165, 174, 192, 1)',
    'rgba(176, 98, 69, 1)',
    'rgba(179, 199, 231, 1)',
    'rgba(181, 152, 161, 1)',
    'rgba(197, 198, 200, 1)',
    'rgba(198, 65, 78, 1)',
    'rgba(200, 75, 141, 1)',
    'rgba(202, 70, 73, 1)',
    'rgba(208, 125, 144, 1)',
    'rgba(212, 111, 164, 1)',
    'rgba(221, 113, 60, 1)',
    'rgba(223, 183, 166, 1)',
    'rgba(224, 158, 138, 1)',
    'rgba(225, 189, 115, 1)',
    'rgba(226, 179, 151, 1)',
    'rgba(228, 82, 67, 1)',
    'rgba(229, 93, 56, 1)',
    'rgba(230, 138, 60, 1)',
    'rgba(231, 213, 93, 1)',
    'rgba(233, 215, 176, 1)',
    'rgba(237, 202, 161, 1)',
    'rgba(241, 168, 66, 1)'
];

const dim_colors = ['rgba(26, 27, 32, 0.15)',
    'rgba(42, 61, 58, 0.15)',
    'rgba(44, 59, 87, 0.15)',
    'rgba(57, 62, 70, 0.15)',
    'rgba(57, 87, 162, 0.15)',
    'rgba(59, 51, 47, 0.15)',
    'rgba(62, 120, 106, 0.15)',
    'rgba(66, 62, 106, 0.15)',
    'rgba(67, 135, 211, 0.15)',
    'rgba(72, 129, 133, 0.15)',
    'rgba(72, 134, 107, 0.15)',
    'rgba(73, 162, 197, 0.15)',
    'rgba(85, 67, 119, 0.15)',
    'rgba(86, 94, 67, 0.15)',
    'rgba(86, 178, 230, 0.15)',
    'rgba(88, 66, 58, 0.15)',
    'rgba(106, 205, 189, 0.15)',
    'rgba(124, 120, 201, 0.15)',
    'rgba(126, 196, 116, 0.15)',
    'rgba(127, 217, 236, 0.15)',
    'rgba(128, 138, 155, 0.15)',
    'rgba(134, 134, 136, 0.15)',
    'rgba(147, 180, 138, 0.15)',
    'rgba(152, 62, 50, 0.15)',
    'rgba(154, 64, 96, 0.15)',
    'rgba(154, 76, 56, 0.15)',
    'rgba(165, 174, 192, 0.15)',
    'rgba(176, 98, 69, 0.15)',
    'rgba(179, 199, 231, 0.15)',
    'rgba(181, 152, 161, 0.15)',
    'rgba(197, 198, 200, 0.15)',
    'rgba(198, 65, 78, 0.15)',
    'rgba(200, 75, 141, 0.15)',
    'rgba(202, 70, 73, 0.15)',
    'rgba(208, 125, 144, 0.15)',
    'rgba(212, 111, 164, 0.15)',
    'rgba(221, 113, 60, 0.15)',
    'rgba(223, 183, 166, 0.15)',
    'rgba(224, 158, 138, 0.15)',
    'rgba(225, 189, 115, 0.15)',
    'rgba(226, 179, 151, 0.15)',
    'rgba(228, 82, 67, 0.15)',
    'rgba(229, 93, 56, 0.15)',
    'rgba(230, 138, 60, 0.15)',
    'rgba(231, 213, 93, 0.15)',
    'rgba(233, 215, 176, 0.15)',
    'rgba(237, 202, 161, 0.15)',
    'rgba(241, 168, 66, 0.15)'
];

const extraRenderers = [new CSS2DRenderer()];
const mat1 = new LineBasicMaterial({ color: "#c5c3c6" });
const mat2 = new LineBasicMaterial({ color: "#969da5" });

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

    let op = map(dist * (1.2), 700, 300, 0, 1);
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

const node_onHover = (cam, node) => {
    const nodeEl = document.createElement('div');
    nodeEl.innerText = "Test";
    return new CSS2DObject(nodeEl);
}

const node_active = (cam, node) => {
    const nodeEl = document.createElement('div');
    const P = document.createElement('P');
    P.className = 'label-container';

    const p = document.createElement('p');
    p.textContent = node.name;
    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.group) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '12px');
        svg.setAttribute('height', '12px');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '6px');
        circle.setAttribute('cy', '6px');
        circle.setAttribute('r', '4px');
        circle.setAttribute('fill', colors[node.group]);
        circle.setAttribute('stroke', 'rgba(255,255,255,0.5)');
        circle.setAttribute('stroke-width', '4px');
        circle.setAttribute('paint-order', 'stroke');

        svg.appendChild(circle);
        P.appendChild(svg);
    }

    // if (node.group) {
    //     p.style.color = '#ffffff';
    //     p.style.backgroundColor = colors[node.group];
    // }
    // else {
    //     p.style.color = '#ffffff';
    //     p.style.backgroundColor = '#000000';
    // }

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
    P.appendChild(p);
    nodeEl.appendChild(P);
    nodeEl.className = 'node-label active';
    return new CSS2DObject(nodeEl);
}

const node_default = (cam, node) => {
    const nodeEl = document.createElement('div');

    const P = document.createElement('p');
    P.className = 'label-container';
    const p = document.createElement('p');
    p.textContent = node.name;
    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.group) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '12px');
        svg.setAttribute('height', '12px');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '6px');
        circle.setAttribute('cy', '6px');
        circle.setAttribute('r', '4px');
        circle.setAttribute('fill', colors[node.group]);
        circle.setAttribute('stroke', 'rgba(255,255,255,0.5)');
        circle.setAttribute('stroke-width', '4px');
        circle.setAttribute('paint-order', 'stroke');

        svg.appendChild(circle);
        P.appendChild(svg);
    }

    // if (node.group) {
    //     p.style.color = colors[node.group];
    //     p.style.backgroundColor = dim_colors[node.group];
    // }
    // else {
    //     p.style.color = '#ffffff';
    //     p.style.backgroundColor = '#ababab';
    // }

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
    P.appendChild(p);
    nodeEl.appendChild(P);
    return new CSS2DObject(nodeEl);
}

const node_dim = (cam, node) => {
    let nodeEl = document.createElement('div');
    nodeEl.className = 'node-label';

    const P = document.createElement('p');
    P.className = 'label-container';

    const p = document.createElement('p');

    p.textContent = node.name;

    if (node.url) {
        p.textContent += ' ↗️';
        p.className = 'label url';
    } else {
        p.className = 'label';
    }

    if (node.group) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '12px');
        svg.setAttribute('height', '12px');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '6px');
        circle.setAttribute('cy', '6px');
        circle.setAttribute('r', '4px');
        circle.setAttribute('fill', colors[node.group]);
        circle.setAttribute('stroke', 'rgba(255,255,255,0.5)');
        circle.setAttribute('stroke-width', '4px');
        circle.setAttribute('paint-order', 'stroke');

        svg.appendChild(circle);
        P.appendChild(svg);
    }

    // if (node.group) {
    //     p.style.color = colors[node.group];
    // }
    // else {
    //     p.style.color = '#16181a';
    // }

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

    P.appendChild(p);
    nodeEl.appendChild(P);

    setNodeOpacity(cam, node, nodeEl);
    return new CSS2DObject(nodeEl);
}

function Modal(info) {
    return (
        <div className="modal">
            <h1>Hello, world</h1>
            <p>{info}</p>
        </div>
    );
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
        this.resumeAnimation = this.resumeAnimation.bind(this);
        this.toggleAnimationCycle = this.toggleAnimationCycle.bind(this);
        this.chargeForceChanged = this.chargeForceChanged.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.angle = 0;
        this.state = {
            count: 0,
            fogValue: 0.001,
            animationCycle: true,
            chargeForce: 120,
            fixAfterDrag: false,
            sidebar: true
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
        if (node.info) {
            // this.updateModal(node.info);
        }
        else if (node.url) {
            window.open(node.url, "_blank");
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

    resumeAnimation(e) {
        if (this.ref) {
            this.ref.current.resumeAnimation();
        }
    }

    toggleAnimationCycle(e) {
        if (this.ref) {
            if (this.state.animationCycle) {
                this.ref.current.pauseAnimation();
                this.setState({ animationCycle: false });
            }
            else {
                this.ref.current.resumeAnimation();
                this.setState({ animationCycle: true });
            }
        }
    }


    chargeForceChanged(e) {
        this.setState({ chargeForce: e.target.value });
        this.ref.current.d3Force("charge", -1 * this.state.chargeForce);
        this.ref.current.d3ReheatSimulation();
    }

    toggleSidebar(e) {
        this.setState({ 'sidebar': !this.state.sidebar });
        if (this.state.sidebar) {
            document.getElementById("details").style.display = "flex";
        } else {
            document.getElementById("details").style.display = "none";
        }
    }

    render() {

        return (
            <div className="graph" >
                <div className="customize" >
                    <div className="title">
                        <h6>Control Panel</h6>
                    </div>
                    <div className="customize-controls">
                        {/* <div className="control">
                            <p>Charge force: {this.state.chargeForce}</p>
                            <input type="range" min="50" max="500" value={this.state.chargeForce} step="1" className="slider" onChange={this.chargeForceChanged} id="chargeForce" />
                        </div> */}
                        <div className="control">
                            <p>Nodes: {this.props.data.nodes.length}, Links: {this.props.data.links.length}</p>
                        </div>
                        <div className="control">
                            <p>Animation Cycle is currrently {this.state.animationCycle ? "active. You may pause to cool down memory usage." : "paused. You can resume to interact with graph."} </p>
                            <div className="button-group">
                                <a className={this.state.animationCycle ? "button secondary" : "button primary"} onClick={this.toggleAnimationCycle}>{this.state.animationCycle ? "Pause cycle" : "Resume cycle"}</a>
                            </div>
                        </div>
                        <div className="control-radio">
                            <input type="checkbox" id="fixAfterDrag" name="fixAfterDrag" value={this.state.fixAfterDrag} onClick={e => { this.setState({ 'fixAfterDrag': !this.state.fixAfterDrag }) }} />
                            {/* <a className={this.state.autoOrbit?"button secondary": "button primary"} onClick={this.toggleAutoOrbit}>{this.state.autoOrbit?"Pause Auto Orbit": "Resume Auto Orbit"}</a> */}
                            <p>Fix nodes after drag?</p>
                        </div>
                        <div className="control-radio">
                            <input type="checkbox" id="sidebar" name="sidebar" value={this.state.sidebar} onClick={this.toggleSidebar} />
                            <p>Show sidebar?</p>
                        </div>
                        <div className="control">
                            <p>Left-click: Rotate, Mouse-wheel/Middle-click: Zoom, Right-click: Pan</p>
                        </div>
                    </div>
                </div>
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
                    linkCurvature={0.035}
                    nodeThreeObject={this.nodeObject}
                    nodeThreeObjectExtend={true}
                    onNodeClick={this.onNodeClick}
                    onLinkClick={this.onLinkClick}
                    onNodeHover={this.onNodeHover}
                    onNodeRightClick={this.onNodeRightClick}
                    onBackgroundClick={this.resetHighlights}
                    onNodeDragEnd={node => {
                        if (this.state.fixAfterDrag) {
                            node.fx = node.x;
                            node.fy = node.y;
                            node.fz = node.z;
                        }
                    }}
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
            document.title = "Graphverse | " + this.props.meta.name;
            sourceLinks = this.props.meta.sourceLinks.map((source) =>
                <li key={source.url}><a href={source.url}>{source.title}</a></li>
            );

            authors = this.props.meta.contributedBy.map((author) =>
                <li key={author}><a href={"github.com/" + author}>{author}</a></li>
            );
        }

        return (

            <div id="details" className="details" style={{ "display": "none" }}>
                <h1>{this.props.meta.name}
                    {this.props.meta.tags.map((value, index) => {
                        return <span key={index}>{value}</span>
                    })}
                </h1>
                <p>{this.props.meta.description}</p>

                <h6>Source</h6>
                <ul>{sourceLinks}</ul>
                <h6>Contributors</h6>
                <ul>{authors}</ul>
                {/* <div className="spacer"></div> */}
                <h6>Graph Actions</h6>
                <div className="button-group">
                    <a className="button primary" href="{this.props.meta.dataSource}">Download</a>
                    <a className="button secondary" href="{this.props.meta.editLink}">Edit on GH</a>
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