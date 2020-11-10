import React from "react";
import {render, act, fireEvent} from "@testing-library/react"
import Countries from "./Countries";

describe("Countries component", () => {
   it("should match snapshot", () => {
       const { asFragment } = render(<Countries/>)

       expect(asFragment()).toMatchSnapshot();
   })

    it("should handle on change query", () => {
        const { getByTestId } = render(<Countries />)

        const queryById = getByTestId("query-test-id");
        const mockedInputValue = "Test";

        act(() => {
            fireEvent.change(queryById, {
                target: { value: mockedInputValue }
            })
        })

        expect(queryById.value).toBe(mockedInputValue);
    })
});