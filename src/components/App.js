import React, { Component } from "react";
import SLL from "./linkedList/SLL";
import BST from "./binarySearchTree/BST";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="linkedList">{<SLL />}</div>;
                <div className="binarySearchTree">{<BST />}</div>;
            </div>
        );
    }
}

export default App;
