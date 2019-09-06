import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";
import { fetchFilms } from "./fetchFilms";
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
                        disabled={
                            this.state.loading ||
                            this.state.linkedList.length === 0
                        }
                        className="addRemoveButton subtractButton"
                        onClick={this.subtractElement}
                    >
                        -
                    </Button>

                    <div className="linkedListContainer">
                        {arrayToRender.map(node => {
                            return (
                                <div className="listItem" key={node.nodeId}>
                                    <img
                                        className="filmImage"
                                        alt=""
                                        src={`../icons/${node.nodeId}.png`}
                                    />
                                    <div className="filmLabelContainer">
                                        <div className="filmLabel">
                                            {node.filmName}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <Button
                        disabled={
                            this.state.loading ||
                            this.state.linkedList.length >= 7
                        }
                        className="addRemoveButton addButton "
                        onClick={this.addElement}
                    >
                        +
                    </Button>
                </div>
                <div className="descriptionContainer">
                    <p className="description">
                        This page retrieves the names of Star Wars films from
                        <a href="https://swapi.co/"> SWAPI </a>using GraphQL.
                        Data is stored in a singly-linked list with{" "}
                        <button
                            disabled={
                                this.state.loading ||
                                this.state.linkedList.length >= 7
                            }
                            onClick={this.addElement}
                            className="link"
                        >
                            INSERT
                        </button>
                        {" "}and{" "}
                        <button
                            disabled={
                                this.state.loading ||
                                this.state.linkedList.length === 0
                            }
                            className="link"
                            onClick={this.subtractElement}
                        >
                            POP
                        </button>{" "}
                        functionality.{" "}
                    </p>
                </div>
            </div>
        );
    }
}

export default SLL;
