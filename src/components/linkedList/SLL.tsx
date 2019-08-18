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

    sortObjectByNumberedString = (
        key: string,
        sliceIndex: { start: number; stop: number }
    ) => {
        return (a: any, b: any) => {
            return (
                parseInt(a[key].slice(sliceIndex.start, sliceIndex.stop)) -
                parseInt(b[key].slice(sliceIndex.start, sliceIndex.stop))
            );
        };
    };

    addElement = async () => {
        this.setState(() => ({ loading: true }));
        fetchFilms().then(dataResult => {
            const sortedFilms = dataResult.data.allFilms.sort(
                this.sortObjectByNumberedString("releaseDate", {
                    start: 0,
                    stop: 4
                })
            );
            const newFilmIndex = this.state.linkedList.length;
            this.setState(prevState => ({
                linkedList: prevState.linkedList.push(
                    newFilmIndex,
                    sortedFilms[newFilmIndex].title
                )
            }));
            this.setState(() => ({ loading: false }));
        });
    };

    subtractElement = () => {
        const returnAfterPop = (listToPop: any) => {
            const newList: SinglyLinkedList = listToPop;
            newList.pop();
            return newList;
        };

        this.setState(prevState => ({
            linkedList: returnAfterPop(prevState.linkedList)
        }));
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
