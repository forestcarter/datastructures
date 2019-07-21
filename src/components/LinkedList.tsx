import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";

class Node {
    nodeId: number;
    filmName: string;
    next: any;
    constructor(nodeId: number, filmName: string) {
        this.nodeId = nodeId;
        this.filmName = filmName;
        this.next = null;
    }
}

class singlyLinkList {
    head: any;
    tail: any;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(nodeId: number, filmName: string) {
        var newNode = new Node(nodeId, filmName);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = newTail;
            this.tail.next = null;
        }
        return current;
    }
}

interface IProps {}

interface IState {
    linkedList: singlyLinkList;
    loading: boolean;
}

class LinkedList extends Component<IProps, IState> {
    state: IState = { linkedList: new singlyLinkList(), loading: true };

    addElement = async (e: any) => {
        this.setState(() => ({ loading: true }));
        await this.getFilmName(this.state.linkedList.length);
        this.setState(() => ({ loading: false }));
    };

    returnAfterPop = (listToPop: any) => {
        const newList: singlyLinkList = listToPop;
        newList.pop();
        return newList;
    };

    subtractElement = (e: any) => {
        this.setState(prevState => ({
            linkedList: this.returnAfterPop(prevState.linkedList)
        }));
    };

    getFilmName = async (indexNum: number) => {
        const query = ` query { allFilms { title } } `;
        const rawResponse = await fetch(
            "https://api.graphcms.com/simple/v1/swapi",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query })
            }
        );
        let dataResult = await rawResponse.json();

        this.setState(prevState => ({
            linkedList: prevState.linkedList.push(
                indexNum,
                dataResult.data.allFilms[indexNum].title
            )
        }));
        return dataResult.title;
    };

    async componentDidMount() {
        this.setState(() => ({ loading: true }));
        await this.getFilmName(0);
        await this.getFilmName(1);
        await this.getFilmName(2);
        this.setState(() => ({ loading: false }));
    }

    render() {
        let currentHead = this.state.linkedList.head;
        const arrayToRender = [];
        while (currentHead) {
            arrayToRender.push(currentHead);
            currentHead = currentHead.next;
        }
        return (
            <div>
                <h2 className="sectionHeader">Linked List</h2>
                <div className="flexRow">
                    <Button
                        disabled={this.state.loading}
                        className="addButton"
                        onClick={this.subtractElement}
                    >
                        Delete Item
                    </Button>

                    <div className="linkedListContainer">
                        {arrayToRender.map(node => {
                            return <div key={node.nodeId}>{node.filmName}</div>;
                        })}
                    </div>
					
                    <Button
                        disabled={
                            this.state.loading ||
                            this.state.linkedList.length >= 7
                        }
                        className="addButton"
                        onClick={this.addElement}
                    >
                        Add Item
                    </Button>
                </div>
            </div>
        );
    }
}

export default LinkedList;
