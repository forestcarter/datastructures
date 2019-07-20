import React, { Component } from "react";
import {
    Form,
    FormGroup,
    FormControl,
    FormLabel,
    Button
} from "react-bootstrap";

interface IProps {}

interface Nodes {
    nodeId: number;
}
interface IState {
    nodes: Nodes[];
}

class LinkedList extends Component<IProps, IState> {
    state: IState = { nodes: [{ nodeId: 0 }, { nodeId: 1 }, { nodeId: 2 }] };

    render() {
        return (
            <div>
                {this.state.nodes.map(node => {
                    return <div key={node.nodeId}>{node.nodeId}</div>;
                })}
            </div>
        );
    }
}

export default LinkedList;
