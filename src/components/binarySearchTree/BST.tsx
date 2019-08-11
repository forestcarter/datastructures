import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./BinarySearchTree.css";
import BinarySearchTree from "./BinarySearchTree";

interface IProps {}

interface IState {
    bst: BinarySearchTree;
    loading: boolean;
}

class BST extends Component<IProps, IState> {
    state: IState = { bst: new BinarySearchTree(), loading: false };

    addData = () => {
        const newBST = this.state.bst;
        newBST.insert(9); 
        this.setState(() => ({
            bst: newBST
        }));
    };

    render() {
        const arrayToRender = [
            this.state.bst.root === null ? "empty" : this.state.bst.root.value
        ];

        return (
            <div>
                <Button
                    disabled={this.state.loading}
                    className="subtractButton"
                    onClick={this.addData}
                >
                    Add Item
                </Button>
                <div className="bstContainer">
                    {arrayToRender.map(node => {
                        return (
                            <div className="listItem" key={node}>
                                <p className="bstLabel">{node}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default BST;
