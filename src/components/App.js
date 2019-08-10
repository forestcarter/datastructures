import React, { Component } from "react";
import LinkedList from "./LinkedList";
import BST from "./BinarySearchTree";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    // addLinkedList=(e)=>{
    // 	this.setState((prevState) => (
    // 		{
    // 			gifts:[
    // 				...prevState.gifts,
    // 				{
    // 					id:prevState.gifts.length+1,
    // 				}
    // 		]
    // 		}
    // 	));
    // }

    // removeLinkedList=(id)=>{
    // 	this.setState((prevState) => (
    // 		{
    // 			gifts:
    // 				prevState.gifts.filter((gift)=>{
    // 					return gift.id !== id
    // 				})

    // 		}
    // 	));
    // }

    render() {
        return (
            <div>
                <div className="linkedList">{<LinkedList />}</div>;
                <div className="binarySearchTree">{<BST />}</div>;
            </div>
        );
    }
}

export default App;
