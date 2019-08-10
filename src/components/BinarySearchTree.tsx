import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./BinarySearchTree.css";


class Node {
    value: number;
    right: Node | null;
    left: Node | null;
    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }
    insert(value: number) {
        const insertNode = new Node(value);
        if (this.root === null) {
            this.root = insertNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return undefined;
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    currentNode.left = insertNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            }
            if (currentNode.value < value) {
                if (!currentNode.right) {
                    currentNode.right = insertNode;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

interface IProps {}

interface IState {
    bst: BinarySearchTree;
    loading: boolean;
}

class BST extends Component<IProps, IState> {
    state: IState = { bst: new BinarySearchTree(), loading: false };

    addData = (e:any) => {
		const newBST = this.state.bst;
		newBST.insert(9)

		this.setState(() => ({
			bst: newBST
		}));
	

    };

    render() {
		const arrayToRender = [1,2,this.state.bst.root === null ? "empty":this.state.bst.root.value]
		
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
                                    <p className="bstLabel">
                                        {node}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
			</div>
        );
    }
}

export default BST;
