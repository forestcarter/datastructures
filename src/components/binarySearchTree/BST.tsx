import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./BinarySearchTree.css";
import BinarySearchTree from "./BinarySearchTree";

interface IProps {}

interface IState {
    bst: BinarySearchTree;
    loading: boolean;
    newNumber: string;
    displayNode: { parent: number; main: number; left: number; right: number };
    parent: string;
}

class BST extends Component<IProps, IState> {
    state: IState = {
        bst: new BinarySearchTree(),
        loading: false,
        newNumber: "",
        displayNode: { parent: -1, main: -1, left: -1, right: -1 },
        parent: "Empty"
    };

    addData = () => {
        const bst = this.state.bst;
        const newMain =
            bst.root === null
                ? parseInt(this.state.newNumber)
                : this.state.displayNode.main;

        bst.insert(parseInt(this.state.newNumber));
        this.updateView(newMain, bst);
    };

    updateView = (
        newMain: number,
        bst: BinarySearchTree = this.state.bst
    ) => {
        const newBST = bst;
        let currentNode = newBST.root;
        const newDisplayValues = {
            parent: -1,
            main: newMain,
            left: -1,
            right: -1
		};
        while (currentNode !== null) {
            if (currentNode.value === newDisplayValues.main) {
                newDisplayValues.left =
                    currentNode.left == null ? -1 : currentNode.left.value;
                newDisplayValues.right =
					currentNode.right == null ? -1 : currentNode.right.value;
                break;
            }
            newDisplayValues.parent = currentNode.value;
            if (currentNode.value > newDisplayValues.main) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        this.setState(() => ({
            bst,
            displayNode: newDisplayValues,
            newNumber: ""
        }));
    };

    findUp=()=>{
        this.updateView(this.state.displayNode.parent);
    }

    findLeft=()=> {
        this.updateView(this.state.displayNode.left);
    }

    findRight=()=> {
        this.updateView(this.state.displayNode.right);
    }

    handleInputChange = (value: string) => {
        this.setState(() => ({
            newNumber: value
        }));
    };

    render() {
        return (
            <div className="pageContainer"> 
			<h2 className="sectionHeader">Binary Search Tree</h2>
                <div className="bstContainer">
                    <Button
                        disabled={
                            this.state.displayNode.parent===-1 || this.state.loading
                        }
						className="directionButton btn btn-info"
						id="upButton"
                        onClick={this.findUp}
                    >
                        Up
                    </Button>
                </div>
                <div className="bstContainer">
                    <p id='parentDisplay' className="bstLabel">{this.state.displayNode.parent>-1?this.state.displayNode.parent: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <p id='mainDisplay' className="bstLabel">{this.state.displayNode.main>-1?this.state.displayNode.main: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <p id='leftDisplay' className="bstLabel">{this.state.displayNode.left>-1?this.state.displayNode.left: 'Empty'}</p>
                    <p id='rightDisplay' className="bstLabel">{this.state.displayNode.right>-1?this.state.displayNode.right: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <Button
                        disabled={
                            this.state.displayNode.left===-1 || this.state.loading
                        }
						className="directionButton btn btn-info"
						id="leftButton"
                        onClick={this.findLeft}
                    >
                        Left
                    </Button>
                    <Button
                        disabled={
                            this.state.displayNode.right===-1 || this.state.loading
                        }
						className="directionButton btn btn-info"
						id="rightButton"
						
                        onClick={this.findRight}
                    >
                        Right
                    </Button>
                </div>

                <div className="addNumberContainer">
                    <input
                        name="newNumber"
                        type="number"
                        min="0"
                        value={this.state.newNumber}
                        id="table_optionOpacity"
                        onChange={e => this.handleInputChange(e.target.value)}
                        className="table_option form-control numberInput"
                    />
					<Button
                    disabled={this.state.loading || this.state.newNumber===""}
					className="btn btn-primary"
					id="addItemButton"
                    onClick={this.addData}
                >
                    Add Item
                </Button>
                </div>
				<div className="descriptionContainer">
                    <p className="description">
                        This page allow items to be added to a binary search tree. A small <br/> section of the tree is displayed with buttons for navigation.{" "}
                    </p>
                </div>
            </div>
        );
    }
}

export default BST;
