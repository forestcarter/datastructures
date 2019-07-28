import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";

describe("App", () => {
	//const id = 1;

    const app = shallow(<App />);
    it("renders correctly", () => {
        expect(app).toMatchSnapshot();
    });

    

    // describe("when clicking add gift", () => {
    //     beforeEach(() => {
    //         app.find(".btn-add").simulate("click");
    //     });

    //     afterEach(() => {
    //         app.setState({ gifts: [] });
    //     });

    //     it("adds a new gift to `state`", () => {
    //         expect(app.state().gifts).toEqual([{ id }]);
    //     });

    //     it("renders a new gift in list", () => {
    //         expect(app.find(".gift-list").children().length).toEqual(1);
	// 	});
		
	// 	it('creates a Gift component',()=>{
	// 		expect(app.find('Gift').exists()).toBe(true)
	// 	})

		
	// });
	
	// describe("user removes gift", () => {
        

    //     beforeEach(() => {
    //         app.instance().removeGift(id);
    //     });
    //     it("removes the gifts from `state`", () => {
    //         expect(app.state().gifts).toEqual([]);
    //     });
    // });
});
