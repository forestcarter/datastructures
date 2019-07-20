import React from "react";
import { shallow } from "enzyme";
import LinkedList from "./LinkedList";

describe("LinkedList.", () => {
	const mockRemove = jest.fn();
	const id =1;
	const props={linkedList:{id}, removeLinkedList:mockRemove}
    const linkedList = shallow(<LinkedList {...props}/>);
    it("renders correctly", () => {
        expect(linkedList).toMatchSnapshot();
    });

    it("initializes with three nodes", () => {
        expect(linkedList.state().nodes.length).toEqual(3);
    });

    // describe("when typing into the person input", () => {
    //     const person = "Uncle";
    //     beforeEach(() => {
    //         linkedList.find(".input-person").simulate("change", {
    //             target: { value: person }
    //         });
    //     });

    //     it("Updates the person in state", () => {
    //         expect(linkedList.state().person).toEqual(person);
    //     });
    // });

    // describe("when typing into the present input", () => {
    //     const present = "golf clubs";
    //     beforeEach(() => {
    //         linkedList.find(".input-present").simulate("change", {
    //             target: { value: present }
    //         });
    //     });

    //     it("Updates the present in state", () => {
    //         expect(linkedList.state().present).toEqual(present);
    //     });
    // });

    

    // describe("When clicking the Remove LinkedList button", () => {
    //     beforeEach(() => {
    //         linkedList.find(".btn-remove").simulate("click");
	// 	});
	// 	it('calls the removeLinkedList callback',()=>{
	// 		expect(mockRemove).toHaveBeenCalledWith(id)
	// 	})
    // });
});
