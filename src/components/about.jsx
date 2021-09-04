import React from "react";

function About(props) {
    return (
        <div className="about">
            <h1>About Graphverse</h1>
            <h1 class="large"><b>Graphverse</b> —<br />
                A Public Project by <a href="https://mathscapes.xyz">Mathscapes</a>
            </h1>
            <h2>Graphverse is an open and free platform to archive complex systems as knowledge graphs
            </h2>
            <p>Why are we always required to codify or articulate information to qualify as knowledge or research? Making connections explicit might provide us with words to articulate, but they also often take away complex details from messiness. Graphverse is built on this inquiry, to build an archive that binds explicit and tacit knowledge. Graphverse is envisioned to provide ways to capture ambiguity, unsaid and invisibles into browsable graphs for everyone.</p>
            <h3>Overview</h3>
            <p>Graphverse draws its inspiration from Wikipedia and the ideas that advocate for free and open access to knowledge to anyone. Structured Graphs are not new and have been used to store and analyze information for analysis, archive, and retrieval. Graphs provide a mechanism for codifying knowledge into explicit connections between its sub-parts. Apart from being visual, they allow for spatial physicality similar to the world around us. The goal of Graphverse, beyond building an open platform and library, is to also explore possible representations of tacit knowledge without being completely explicit. It may be at odds to say that tacit knowledge can be represented while it is tacit by nature. Over the future course of this project, we hope to develop ways to avoid codifying every part in any system and allow space for ambiguity in the graphs.</p>
            <p>Both parts of the Graphverse platform, datasets and the host app (including complete source code), are continuously available as open source. Mathscapes welcome everyone to help us improving Graphverse by contributing in its development or editing, or even take Graphverse to build their own platform to host knowledge graphs.</p>
            <p>Keywords: Network Visualization, Knowledge Graphs, Tacit and Explicit Knowledge</p>
            <h3>Background</h3>
            <p>Our interest in knowledge graphs and sharing stems from (a) our incapability to articulate ideas effectively, (b) limited verbal and writing skills, and (c) how most research publishing platforms are closed and inaccessible to large portions of our society. We believe that it is not just us, and many are often limited by their language, background, and other factors that substantially reduce their ability to consume and contribute to what is otherwise generally considered formal research. Formal research and peer reviews also often condemn non-standardized ways of expressing research, and as a result, discourages others in their capabilities to provide what we think as equally valuable, if not more, research. We value synthesized research and analysis for specific applications, but it can be terminal for many beginners who are forced to believe that research or knowledge can be disseminated only through one of the existing ways. We think we should reduce our reliance on the standards and templates to welcome more novel ways in all possible corners and areas of what may constitute research.</p>
            <p>Graphverse is one of our ideas to bring attention to tacit roots of knowledge and take the liberty of sharing complex, non-explicit knowledge with everyone to also appreciate hidden complexity and may also help in their research. It is helpful to know that it is not just research outcomes where we deny tacit knowledge. Design portfolios, Student assignments, Project documentations are some other artifacts that are often valued for simplicity and rich articulation. Graphverse hopes to also shift the perspective of articulations that may not be in written or concise forms.</p>
            <h3>Case Studies, Ongoing and Future work</h3>
            <h4>Forward Citation Graph</h4>
            <h4>Complex Timelines</h4>
            <h4>Topological Isomorphism</h4>
            <h4>Tautological Equivalence</h4>
            <h4>Nonaka-Takeuchi model</h4>
            <h4>Abstract Syntax Tree</h4>
            <h4>Situated Knowledge</h4>
            <h4>Procedural Knowledge</h4>
            <h4>Git tracking</h4>

            <h3>Using Graphverse</h3>
            <p>Graphverse can be accessed at https://graphverse.mathscapes.xyz and graphs can be searched from the home page. Graphs can be edited by anyone and the changes will be merged periodically for everyone to see. Graphs can also be downloaded as JSON files to be used under Creative Commons Attribution-ShareAlike License in your project.</p>

            <h3>Implementation</h3>
            <h4>App architecture</h4>
            <p>Graphverse is implemented as a React-based web application. Graphverse, and the graph data both are hosted on this Github repository and webpage is rendered as Github Pages at https://graphverse.mathscapes.xyz.</p>
            <p>Graphverse primarily uses vasturiano/react-force-graph-3d which is based on mrdoob/threejs and d3/d3 to render interactive 3d graphs in a web browser utilizing WebGL. For the full list of project dependencies, see graphverse/package.json.</p>
            <h4>Graphverse Graph Format Version 1</h4>
            <p>Graphs are stored in Graphverse Graph Format Version 1. Graphs are stored in a JSON file with the following format:</p>

            <p>Graph data is recorded as a collection of nodes and links in JSON files along with their meta information such as name, language, description, source links, contributors, edit and download links. The node can be simple text, or be paired with an emoji or custom image. They may also have an associated URL which can be accessed by right clicking the node. The left click is used for activating the node. A graph may have several sub-graphs embedded using the URL property.</p>

            <p>While it may be appealing to add more properties to aid reading the graph, Graphverse intentionally restricts to undirected links and avoids further structural enhancements to keep the graph simple (in its construction) and and allows focus on to its nodes and links. This counter-intuitive decision may also create a way of keeping relationships between nodes ambiguous.</p>

            <h3>Public Roadmap</h3>
            <p>Graphverse intends to become a large repository of graphs that are openly accessible to view and edit by anyone. The primary goal is to arrive at a milestone of collecting 100 such graphs while covering as much breadth as possible in STS.</p>

            <h4>August 2020</h4>
            <ul>
                <li>Development of MVP Concept</li>
                <li>Develop project roadmap</li>
                <li>Document Project Overview (this document)</li>
                <li>Get feedback from invited experts</li>
                <li>Iteratively refine project vision</li>
                <li>Identify and build examples of semi-tacit graphs</li>
                <li>Develop Issue reporting guide and template</li>
                <li>Setup Github repo and Contributor guidelines</li>
                <li>Deploy and release version 0 for everyone</li>
            </ul>
            <h4>September 2020</h4>
            <p>TBA</p>

            <h3>Contribute to Graphverse</h3>
            <h4>Editing an Existing Graph</h4>
            <h4>Create a new Graph</h4>
            <h4>Report a bug</h4>
            <h4>Propose a new feature</h4>
            <h4>Open tasks</h4>

            <h3>Acknowledgement</h3>
            <h4>Partnering Organizations</h4>
            <h4>Contributors</h4>
            <h4>Supporters</h4>
            <h4>Used by</h4>
            <h3>Bibliography</h3>
            <p>Wikimedia Foundation. 2018. “Access.” Wikimedia Public Policy. https://policy.wikimedia.org/policy-landing/access/.</p>

            <div className="footer">
                <h3>About Mathscapes</h3>
                <p>
                    Started in 2008 by Gaurav Singh, Mathscapes produces research and work in the area of algorithms with mathematics and visual arts. Mathscapes is shortened from Mathscapes Research (OPC) Pvt Ltd., which was incorporated under the Companies Act, 2013 (18 of 2013) in India.
                </p>
                <p>Contact: hello@mathscapes.xyz</p>
            </div>
        </div>
    );
}

export default About;