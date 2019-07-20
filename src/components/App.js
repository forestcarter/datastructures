import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import LinkedList from './LinkedList';
class App extends Component {
	constructor(){
		super();
		this.state ={}
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

	render(){
		return(
			<div>
				<h2>Linked List</h2>
				<div className='linedList'>
					{
						<LinkedList 
						/>
							
					}
				</div>
				<Button className='btn-add'> Add Link</Button>
			</div>
		)
	}

}

export default App