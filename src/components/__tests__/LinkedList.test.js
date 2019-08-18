import React from "react";
import { shallow } from "enzyme";
import SLL from "../linkedList/SLL";

function tick() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}

describe("LinkedList", () => {
    const wrapper = shallow(<SLL />);

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("initializes with an empty linkedList", () => {
        expect(wrapper.state().linkedList.length).toEqual(0);
    });

    describe("Test API usage", () => {
        beforeEach(() => {
            fetch.mockResponseOnce(
                JSON.stringify({
                    data: {
                        allFilms: [
                            {
                                title: "A New Hope",
                                releaseDate: "1977-05-25T00:00:00.000Z"
                            },
                            {
                                title: "The Empire Strikes Back",
                                releaseDate: "1980-05-17T00:00:00.000Z"
                            },
                            {
                                title: "Return of the Jedi",
                                releaseDate: "1983-05-25T00:00:00.000Z"
                            },
                            {
                                title: "The Phantom Menace",
                                releaseDate: "1999-05-19T00:00:00.000Z"
                            },
                            {
                                title: "Attack of the Clones",
                                releaseDate: "2002-05-16T00:00:00.000Z"
                            },
                            {
                                title: "Revenge of the Sith",
                                releaseDate: "2005-05-19T00:00:00.000Z"
                            },
                            {
                                title: "The Force Awakens",
                                releaseDate: "2015-12-11T00:00:00.000Z"
                            }
                        ]
                    }
                })
            );
        });

        it("Get first film and succeed2", async () => {
            wrapper.find(".addButton").simulate("click");
            await tick();

            expect(wrapper.state().linkedList.length).toEqual(1);
            expect(wrapper.state().linkedList.head.filmName).toEqual(
                "A New Hope"
            );
            expect(wrapper.state().linkedList.tail.filmName).toEqual(
                "A New Hope"
            );
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(
                "https://api.graphcms.com/simple/v1/swapi"
            );
        });

        it("Get second film and succeed2", async () => {
            wrapper.find(".addButton").simulate("click");
            await tick();
            expect(wrapper.state().linkedList.length).toEqual(2);
            expect(wrapper.state().linkedList.head.filmName).toEqual(
                "A New Hope"
            );
            expect(wrapper.state().linkedList.tail.filmName).toEqual(
                "The Empire Strikes Back"
            );
            expect(fetch.mock.calls.length).toEqual(2);
        });

        it("deletes items correctly", () => {
            wrapper.find(".subtractButton").simulate("click");
            wrapper.find(".subtractButton").simulate("click");
            wrapper.find(".subtractButton").simulate("click");
            expect(wrapper.state().linkedList.head).toEqual(null);
        });
    });
});
