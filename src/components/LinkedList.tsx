import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";

interface IProps {}

interface Nodes {
    nodeId: number;
}
interface IState {
    nodes: Nodes[];
}

class LinkedList extends Component<IProps, IState> {
    state: IState = { nodes: [{ nodeId: 0 }, { nodeId: 1 }, { nodeId: 2 }] };

    addElement = (e: any) => {
        this.setState(prevState => ({
            nodes: [
                ...prevState.nodes,
                {
                    nodeId: prevState.nodes.length
                }
            ]
        }));
	};

	subtractElement = (e: any) => {
        this.setState(prevState => ({
            nodes: 
                prevState.nodes.slice(0,-1),
        }));
    };

    render() {
        return (
            <div>
                <h2 className="sectionHeader">Linked List</h2>
                <div className="flexRow">
				<Button className="addButton" onClick={this.subtractElement}>
                        Delete Item
                    </Button>
                
                    <div className="linkedListContainer">
                        {this.state.nodes.map(node => {
                            return <div key={node.nodeId}>{node.nodeId}</div>;
                        })}
                    </div>
                    <Button className="addButton" onClick={this.addElement}>
                        Add Item
                    </Button>
                </div>
            </div>
        );
    }
}

export default LinkedList;
