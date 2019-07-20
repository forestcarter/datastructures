import React, { Component } from "react";
import { Button } from "react-bootstrap";
import LinkedList from "./LinkedList";
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
        return <div className="linkedList">{<LinkedList />}</div>;
    }
}

export default App;
