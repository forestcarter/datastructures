import React from "react";
import { shallow } from "enzyme";
import BST from "../binarySearchTree/BST";

describe("BinarySearchTree", () => {
    const wrapper = shallow(<BST />);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("initializes with an empty binary search tree", () => {
        expect(wrapper.state().bst.root).toBe(null);
	});
	
	it("Add the number 5 and it shows up in the main display", () => {
		wrapper.find(".numberInput").simulate("change",{target: { value: 5}});
		wrapper.find("#addItemButton").simulate("click");
		expect(wrapper.find('#mainDisplay').text()).toEqual("5");
	});

	it("Add the number 10 and it shows up in the right display", () => {
		wrapper.find(".numberInput").simulate("change",{target: { value: 10}});
		wrapper.find("#addItemButton").simulate("click");
		expect(wrapper.find('#rightDisplay').text()).toEqual("10");
	});

	it("Add the number 2 and it shows up in the left display", () => {
		wrapper.find(".numberInput").simulate("change",{target: { value: 2}});
		wrapper.find("#addItemButton").simulate("click");
		expect(wrapper.find('#leftDisplay').text()).toEqual("2");
	});

	it("Click rightButton and display correctly", () => {
		wrapper.find("#rightButton").simulate("click");
		expect(wrapper.find('#mainDisplay').text()).toEqual("10");
	});

	it("Click upButton and display correctly", () => {
		wrapper.find("#upButton").simulate("click");
		expect(wrapper.find('#mainDisplay').text()).toEqual("5");
	});

	it("Click leftButton and display correctly", () => {
		wrapper.find("#leftButton").simulate("click");
		expect(wrapper.find('#mainDisplay').text()).toEqual("2");
	});

});
