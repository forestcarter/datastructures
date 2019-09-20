
import React from "react";
import { shallow } from "enzyme";
import MBH from "../maxBinaryHeap/MBH";

describe("BinarySearchTree", () => {
    const wrapper = shallow(<MBH />);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("initializes with an empty binary heap", () => {
        expect(wrapper.state().mbh.array).toEqual([]);
	});
	
	it("Add the number 5 and it shows up in the main display", () => {
		wrapper.find("#heapInput").simulate("change",{target: { value: "5"}});
		wrapper.find("#heapAddButton").simulate("click");
		expect(wrapper.find('.mbhLabel').text()).toEqual("5");
	});
	
	it("Add the number 7 and it shows up in the main display", () => {
		wrapper.find("#heapInput").simulate("change",{target: { value: "7"}});
		wrapper.find("#heapAddButton").simulate("click");
		expect(wrapper.find('.mbhLabel').at(0).text()).toEqual("7");
	});

	it("Add the number 3 and it shows up in the main display", () => {
		wrapper.find("#heapInput").simulate("change",{target: { value: "3"}});
		wrapper.find("#heapAddButton").simulate("click");
		expect(wrapper.find('.mbhLabel').at(2).text()).toEqual("3");
	});

	it("Delete the root successfully once", () => {
		wrapper.find("#heapRemoveButton").simulate("click");
		expect(wrapper.find('.mbhLabel').at(0).text()).toEqual("5");
	});

	it("Delete the root successfully twice", () => {
		wrapper.find("#heapRemoveButton").simulate("click");
		expect(wrapper.find('.mbhLabel').at(0).text()).toEqual("3");
	});

	it("Delete the root successfully three times", () => {
		wrapper.find("#heapRemoveButton").simulate("click");
		expect(wrapper.state().mbh.array).toEqual([]);
	});

});
