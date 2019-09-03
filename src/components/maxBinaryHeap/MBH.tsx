import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./MaxBinaryHeap.css";
import MaxBinaryHeap from "./MaxBinaryHeap";

interface IProps {}

interface IState {
    mbh: MaxBinaryHeap;
    loading: boolean;
    newNumber: string;
    isValid: boolean;
}

class MBH extends Component<IProps, IState> {
    state: IState = {
        mbh: new MaxBinaryHeap(),
        loading: false,
        newNumber: "",
        isValid: false
    };

    addData = () => {
        this.setState(prevState => ({
			mbh: prevState.mbh.insert(parseInt(this.state.newNumber)),
			isValid:false
        }));
	};

	remove = () => {
        this.setState(prevState => ({
			mbh: prevState.mbh.remove()
        }));
    };

    handleInputChange = (value: string) => {
        const isValid =
            !value.includes(".") &&
            parseInt(value) > 0 &&
            parseInt(value) < 1000 &&
            !this.state.mbh.array.includes(parseInt(value));
        this.setState(() => ({
            newNumber: value,
            isValid
        }));
    };

    render() {
        return (
            <div className="pageContainer">
                <h6 id="heapSectionHeader" className="sectionHeader">Max Binary Heap</h6>
				<div className="descriptionContainer">
                    <p className="description">
                        Enter a number (1-999) to add it to the Max Binary Heap{" "}
                    </p>
                </div>
                <div className="mbhContainer">
                    {this.state.mbh.array.map((number: number, index:number) => {
                        return (
                            <div key={index} className="mbhLabel">
                                {number}
                            </div>
                        );
                    })}
                </div>

                <div className="addNumberContainer">
                    <input
						name="newNumber"
                        type="number"
                        min="0"
                        max="999"
                        value={this.state.newNumber}
                        id="table_optionOpacity"
                        onChange={e => this.handleInputChange(e.target.value)}
                        className="table_option form-control numberInput"
                    />
                    <Button
                        disabled={
                            !this.state.isValid ||
                            this.state.mbh.array.length > 17
                        }
                        className="btn btn-primary padBottom"
                        onClick={this.addData}
                    >
                        Add Item
                    </Button>
					<Button
                        disabled={
                            this.state.mbh.array.length === 0
                        }
                        className="btn btn-warning padBottom"
                        onClick={this.remove}
                    >
                        Remove
                    </Button>
                </div>
                <div className="descriptionContainer">
                    <p className="description">
                        This page allow items to be added and removed from a Max Binary Heap.{" "}
                    </p>
                </div>
            </div>
        );
    }
}

export default MBH;
