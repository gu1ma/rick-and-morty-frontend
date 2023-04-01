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
  getAllCharacters: () => void;
}

export const CharactersContext = React.createContext<ICharactersContext>(
  [] as unknown as ICharactersContext
);

export const CharactersProvider = ({ children }: ICharactersContextProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const getAllCharacters = useCallback(() => {
    getCharactersApi()
      .then(result => {
        setCharacters(result.data.results)
      })
  }, []);

  useEffect(() => {
    getAllCharacters()
  }, [getAllCharacters])

  return (
    <CharactersContext.Provider
      value={{ characters, getAllCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};