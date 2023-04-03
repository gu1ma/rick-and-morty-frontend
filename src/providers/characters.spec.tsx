import SearchInput from '@/components/SearchInput'
import { fireEvent, render } from '@testing-library/react'
import { CharactersProvider } from './characters'

import { getCharactersByNameApi, getCharactersApi } from "@/services";
jest.mock("@/services", () => {
return {
    getCharactersApi: jest.fn(() => new Promise(() => {
        result: {
            data: {
                results: [
                    {
                        species: "Human",
                        status: "Alive",
                        name: "Rick",
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        id: 1
                    }
                ]
            }
        }
    })), 
    getCharactersByNameApi: jest.fn(() => new Promise(() => {
        result: {
            data: {
                results: [
                    {
                        species: "Human",
                        status: "Alive",
                        name: "Rick",
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        id: 1
                    }
                ]
            }
        }
    }))
}})
 
describe('@Providers @Characters', () => {
    it('should render component correctly', () => {
        const wrapper = render(
            <CharactersProvider>
                <p>Opa</p>
            </CharactersProvider>
            )

        expect(wrapper).toBeTruthy()
        expect(getCharactersApi).toHaveBeenCalled()
    })

    it('should call getCharacters', () => {
        const searchString = 'foo'
        const { getByLabelText } = render(
            <CharactersProvider>
                <SearchInput />
            </CharactersProvider>
        )

        const input: any = getByLabelText('search-input')
        fireEvent.change(input, { target: { value: searchString } })

        expect(getCharactersByNameApi).toHaveBeenCalledWith(searchString);
    })
})