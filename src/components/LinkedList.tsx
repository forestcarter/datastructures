import React, { Component } from "react";
import "./LinkedList.css";
import { Button } from "react-bootstrap";

interface IProps {}

interface Nodes {
	nodeId: number;
	filmName:string
}

interface IState {
	nodes: Nodes[];
	loading:boolean
}

class LinkedList extends Component<IProps, IState> {
    state: IState = { nodes: [], loading:true};

    addElement  = async (e: any) => {
		this.setState(() => ({ loading:true }));
		await this.getFilmName(this.state.nodes.length);
		this.setState(() => ({ loading:false }));
	}

	subtractElement = (e: any) => {
        this.setState(prevState => ({
            nodes: 
                prevState.nodes.slice(0,-1),
        }));
	};

	getFilmName = async (indexNum:number)=>{
			const rawResponse = await fetch(`https://swapi.co/api/films/${indexNum+1}/?format=json`);
			let dataResult = await rawResponse.json();
			this.setState(prevState => ({
				nodes: [
					...prevState.nodes,
					{
						nodeId: indexNum,
						filmName: dataResult.title,
					}
				]
			}));
			return dataResult.title;
	}
	
	async componentDidMount(){
		this.setState(() => ({ loading:true }));
		await this.getFilmName(0);
		await this.getFilmName(1);
		await this.getFilmName(2);
		this.setState(() => ({ loading:false }));


		//0 [0,1,2].map(await this.getFilmName).
		//const filmNames = await this.getFilmName.call(null,...[0,1,2])	
	}

    render() {
        return (
            <div>
                <h2 className="sectionHeader">Linked List</h2>
                <div className="flexRow">
				<Button disabled={this.state.loading} className="addButton" onClick={this.subtractElement}>
                        Delete Item
                    </Button>
                
                    <div className="linkedListContainer">
                        {this.state.nodes.map(node => {
                            return <div key={node.nodeId}>{node.filmName}</div>;
                        })}
                    </div>
                    <Button disabled={this.state.loading || this.state.nodes.length>=7} className="addButton" onClick={this.addElement}>
                        Add Item
                    </Button>
                </div>
            </div>
        );
    }
}

export default LinkedList;
