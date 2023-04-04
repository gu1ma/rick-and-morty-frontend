import { getCharactersApi, getCharactersByNameApi } from '../services';
import React, { ReactNode, useEffect, useState, useCallback } from "react";

interface ICharactersContextProps {
  children: ReactNode;
}

export interface ICharacter {
  id: number,
  name: string, 
  image: string, 
  species: string,
  gender: string,
  status: string, 
  type: string,
}

interface ICharactersContext {
  characters: ICharacter[];
  getCharacters: (page: number) => void;
  setSearchName: (name: string) => void;
  setPage: (page: number) => void;
  page: number;
  filterCharacterById: (id: number) => object | undefined;
}

export const CharactersContext = React.createContext<ICharactersContext>(
  [] as unknown as ICharactersContext
);

export const CharactersProvider = ({ children }: ICharactersContextProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('')

  const getCharacters = useCallback(() => {
    getCharactersApi(page)
      .then(result => {
        setCharacters([...characters, ...result.data.results])
      })
  }, [page]);

  const getCharactesByName = useCallback(() => {
    getCharactersByNameApi(searchName).then(result => {
      setCharacters(result.data.results)
    })
  }, [searchName])

  const filterCharacterById = (id: number) => characters.find(character => character.id == id)

  useEffect(() => {
    getCharacters()
  }, [getCharacters, page])

  useEffect(() => {
    getCharactesByName()
  }, [getCharactesByName])

  return (
    <CharactersContext.Provider
      value={{ characters, getCharacters, page, setPage, setSearchName, filterCharacterById }}
    >
      {children}
    </CharactersContext.Provider>
  );
};