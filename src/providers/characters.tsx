import { getCharactersApi } from "@/services";
import React, { ReactNode, useEffect, useState, useCallback } from "react";

interface ICharactersContextProps {
  children: ReactNode;
}

export interface ICharacter {
  id: number,
  name: string, 
  image: string, 
  species: string
}

interface ICharactersContext {
  characters: ICharacter[];
  getCharacters: (page: number) => void;
  setPage: (page: number) => void;
  page: number;
}

export const CharactersContext = React.createContext<ICharactersContext>(
  [] as unknown as ICharactersContext
);

export const CharactersProvider = ({ children }: ICharactersContextProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1)

  const getCharacters = useCallback(() => {
    getCharactersApi(page)
      .then(result => {
        setCharacters([...characters, ...result.data.results])
      })
  }, [page]);

  useEffect(() => {
    getCharacters()
  }, [getCharacters, page])

  return (
    <CharactersContext.Provider
      value={{ characters, getCharacters, page, setPage }}
    >
      {children}
    </CharactersContext.Provider>
  );
};