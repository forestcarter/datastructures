import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";
import { fetchFilms } from "./fetchFilms";
import bb8_1 from './images/bb1 - Copy (7).png';

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
    state: IState = { linkedList: new singlyLinkList(), loading: false };

    addElement = async () => {
        this.setState(() => ({ loading: true }));

        return this.getFilmName(this.state.linkedList.length).then(() => {
			console.log("ko")
            this.setState(() => ({ loading: false }));
        })
    };

    subtractElement = (e: any) => {
        const returnAfterPop = (listToPop: any) => {
            const newList: singlyLinkList = listToPop;
            newList.pop();
            return newList;
        };
        this.setState(prevState => ({
            linkedList: returnAfterPop(prevState.linkedList)
        }));
    };

    getFilmName = (indexNum: number) => {
        const sortFilms = (dataResult: any) => {
            const compareFilms = (
                a: { releaseDate: string; title: string },
                b: { releaseDate: string; title: string }
            ) => {
                return (
                    parseInt(a.releaseDate.slice(0, 4)) -
                    parseInt(b.releaseDate.slice(0, 4))
                );
            };
            return dataResult.data.allFilms.sort(compareFilms);
        };

        return fetchFilms()
            .then(dataResult => {
				const newFilmName = sortFilms(dataResult)[indexNum].title;
				
                this.setState(prevState => ({
                    linkedList: prevState.linkedList.push(indexNum, newFilmName)
                }));
            })
            .catch(() => {
                this.setState(prevState => ({
                    linkedList: prevState.linkedList.push(indexNum, "Missing")
                }));
            });
    };

    // async componentDidMount() {
    //     this.setState(() => ({ loading: true }));
    //     // const result = await [0, 1, 2].forEach(ind => {
    //     //     this.getFilmName(ind);
    //     // });
    //     await this.getFilmName(0);
    //     await this.getFilmName(1);
    //     await this.getFilmName(2);
    // 	this.setState(() => ({ loading: false }));
    // 	//return result
    // }

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
                        className="subtractButton"
                        onClick={this.subtractElement}
                    >
                        Delete Item
                    </Button>

                    <div className="linkedListContainer">
                        {arrayToRender.map(node => {
                            return (
                                <div className="listItem" key={node.nodeId}>
                                    <img
										className="filmImage"
										alt=""
                                        src={bb8_1}
                                    />
                                    <p  className="filmLabel">
                                        {node.filmName}
                                    </p>
                                </div>
                            );
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
