import React from "react";
import { shallow } from "enzyme";
import LinkedList from "./LinkedList";

describe("LinkedList.", () => {
    const mockRemove = jest.fn(LinkedList.addElement);
    //const id = 1;
    //const props = { linkedList: { id }, removeLinkedList: mockRemove };
    const wrapper = shallow(<LinkedList />);
    const instance = wrapper.instance();

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("initializes with an empty linkedList", () => {
        expect(wrapper.state().linkedList.length).toEqual(0);
	});
	
	
    describe("testing methods", () => {
		
			// it("Mounts and adds three", () => {
			// 	instance.componentDidMount().then(res=>{
			// 		//console.log(wrapper.state())
			// 		expect(wrapper.state().index.length).toEqual( 3 );
			// 	})
			// });
			// instance.subtractElement();
			// instance.subtractElement();
			// instance.subtractElement();
		//jest.spyOn(instance, 'getFilmName');
		

        it("get second film and succeed", () => {
            fetch.mockResponseOnce(
                JSON.stringify({
                    data: { allFilms: [{ title: "A New Hope",releaseDate:"1998" },{ title: "A New Hope2",releaseDate:"1999" },{ title: "A New Hope3",releaseDate:"2000" },{ title: "A New Hope4",releaseDate:"2005" },{ title: "A New Hope5",releaseDate:"2006" },{ title: "A New Hope6",releaseDate:"2007" },{ title: "A New Hope7",releaseDate:"2008" }] }
                })
			);
			
            instance.addElement().then(res => {
				expect(wrapper.state().linkedList.length).toEqual(
					1
				)
                expect(wrapper.state().linkedList.head.filmName).toEqual(
                    "A New Hope"
				);
				expect(wrapper.state().linkedList.tail.filmName).toEqual(
                    "A New Hope"
				); 
			
			});
				// instance.addElement().then(res => {
				// 	expect(wrapper.state().linkedList.head.filmName).toEqual(
				// 		"Missing"
				// 	)
				// 	expect(wrapper.state().linkedList.length).toEqual(
				// 		1
				// 	)
				// 	// instance.subtractElement();
				// 	// expect(wrapper.state().linkedList.head).toEqual(null);
				// 	// instance.subtractElement();
				// 	// expect(wrapper.state().linkedList.tail).toEqual(null);
				// }) 
			
            //assert on the times called and arguments given to fetch
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(
                "https://api.graphcms.com/simple/v1/swapi"
			);
			
			
		});

		
		

        it("deletes item correctly", () => {
			instance.subtractElement();
			instance.subtractElement();
			instance.subtractElement();
            expect(wrapper.state().linkedList.head).toEqual(null);
        });
    });

    // test('the data is peanut butter', done => {
    // 	function callback(data) {
    // 	  expect(data).toBe('peanut butter');
    // 	  done();
    // 	}

    // 	getFilmName(callback);
    //   });

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
