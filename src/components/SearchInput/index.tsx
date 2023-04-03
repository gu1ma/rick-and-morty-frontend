import { CharactersContext } from "@/providers/characters";
import { useContext } from "react";
import { Input } from "./style";



export default function SearchInput() {
    const { setSearchName } = useContext(CharactersContext); 
    return (
        <Input type="text" onChange={(event) => setSearchName(event.target.value)} aria-label="search-input" />
    )
}