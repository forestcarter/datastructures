import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import Routes from "./Routes";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSSL = () => {
        this.props.history.push("/SLL");
    };

    handleBST = () => {
        this.props.history.push("/BST");
    };
    render() {
        return (
            <div>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Navbar.Brand href="/">Playground</Navbar.Brand>
                    <Navbar.Toggle id="overrides-nav-toggler" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="SLL">Singly-Linked List</Nav.Link>
                            <Nav.Link href="BST">Binary Search Tree</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes />
            </div>
        );
    }
}

export default withRouter(App);
