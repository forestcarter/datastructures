import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";
import { fetchFilms } from "./fetchFilms";
import bb8_1 from "../images/bb1 - Copy (7).png";
import SinglyLinkedList from "./SinglyLinkedList";

interface IProps {}

interface IState {
    linkedList: SinglyLinkedList;
    loading: boolean;
}

class SLL extends Component<IProps, IState> {
    state: IState = { linkedList: new SinglyLinkedList(), loading: false };

    addElement = async () => {
        this.setState(() => ({ loading: true }));
        return this.getFilmName(this.state.linkedList.length).then(() => {
            this.setState(() => ({ loading: false }));
        });
    };

    subtractElement = () => {
        const returnAfterPop = (listToPop: any) => {
            const newList: SinglyLinkedList = listToPop;
            newList.pop();
            return newList;
        };

        const popped = this.state.linkedList.pop();
        this.setState(prevState => ({
            linkedList: returnAfterPop(prevState.linkedList)
        }));
        return popped;
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

        return fetchFilms().then(dataResult => {
            const newFilmName = sortFilms(dataResult)[indexNum].title;
            this.setState(prevState => ({
                linkedList: prevState.linkedList.push(indexNum, newFilmName)
            }));
        });
    };

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
                                    <p className="filmLabel">{node.filmName}</p>
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

export default SLL;
