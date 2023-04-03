import { render,fireEvent } from '@testing-library/react'
import SearchInput from '.' 

import React from "react";


jest.mock("react", () => {
    return {
  ...jest.requireActual("react"),
  useContext: jest.fn().mockReturnValue({ setSearchName: jest.fn() })
}})

describe('@Components @SearchInput', () => {
    it('should render component correctly', () => {
        const component = render(<SearchInput />)
        expect(component).toBeTruthy()
    })

    it('should call setSearchName on change input', () => {
        const { getByLabelText } = render(<SearchInput />)
        const input: any = getByLabelText('search-input')
        fireEvent.change(input, { target: { value: 'foo' } })

        const setSearchName = React.useContext().setSearchName;

        expect(setSearchName).toHaveBeenCalled()
        expect(input.value).toBe('foo')
    })
})