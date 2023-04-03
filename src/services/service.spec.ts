import { api } from "@/lib/axios"
import { getCharactersApi, getCharactersByNameApi } from "."

jest.mock("@/lib/axios", () => {
return {
    api: {
        get: jest.fn(url => null)
    }
}})

describe('@Services ', () => {
    it('getCharactersApi should call request correctly', () => {
        getCharactersApi(5)
        expect(api.get).toHaveBeenCalledWith('character?page=5')
    })

    it('getCharactersByNameApi should call request correctly', () => {
        getCharactersByNameApi('foo')
        expect(api.get).toHaveBeenCalledWith('character?name=foo')
    })
})