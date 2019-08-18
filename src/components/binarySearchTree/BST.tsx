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
        // const defaultNode = {parent:-1, main:-1,left:-1,right:-1}
        // const firstNode = {parent:-1, main:parseInt(this.state.newNumber),left:-1,right:-1}
        // console.log(bst.root===null)
        //const newDisplayNode= bst.root===null?firstNode:defaultNode

        bst.insert(parseInt(this.state.newNumber));
        // this.setState(() => ({
        // 	bst: newBST,
        // 	newNumber:'',
        // 	displayNode : newDisplayNode
        // }));
        this.updateView(newMain, bst);
    };

    updateView = (
        newMain: number = this.state.displayNode.main,
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
            <div>
                <div className="">
                    <label className="bstLabel">Add Number</label>
                    <input
                        name="newNumber"
                        type="number"
                        min="0"
                        value={this.state.newNumber}
                        id="table_optionOpacity"
                        onChange={e => this.handleInputChange(e.target.value)}
                        className="table_option form-control "
                    />
                </div>
                <Button
                    disabled={this.state.loading}
                    className=""
                    onClick={this.addData}
                >
                    Add Item
                </Button>
                <div className="bstContainer">
                    <Button
                        disabled={
                            this.state.displayNode.parent===-1 || this.state.loading
                        }
                        className=""
                        onClick={this.findUp}
                    >
                        Up
                    </Button>
                </div>
                <div className="bstContainer">
                    <p className="bstLabel">{this.state.displayNode.parent>-1?this.state.displayNode.parent: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <p className="bstLabel">{this.state.displayNode.main>-1?this.state.displayNode.main: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <p className="bstLabel">{this.state.displayNode.left>-1?this.state.displayNode.left: 'Empty'}</p>
                    <p className="bstLabel">{this.state.displayNode.right>-1?this.state.displayNode.right: 'Empty'}</p>
                </div>
                <div className="bstContainer">
                    <Button
                        disabled={
                            this.state.displayNode.left===-1 || this.state.loading
                        }
                        className=""
                        onClick={this.findLeft}
                    >
                        Left
                    </Button>
                    <Button
                        disabled={
                            this.state.displayNode.right===-1 || this.state.loading
                        }
                        className=""
                        onClick={this.findRight}
                    >
                        Right
                    </Button>
                </div>
            </div>
        );
    }
}

export default BST;
