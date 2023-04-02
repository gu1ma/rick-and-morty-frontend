import Image from "next/image";
import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { CharactersContext } from '@/providers/characters'
import { useState } from "react";

import { Container, Name, ContainerCharacter, Description } from "./style";

export default function CharacterResume() {

  const { query } = useRouter()
  const { id } = query;

  const { filterCharacterById } = useContext(CharactersContext);
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if(id) {
      const characterFiltered = filterCharacterById(id)
      setCharacter(characterFiltered)
    }
  }, [filterCharacterById, id])

  return (
    <>
      <Head>
        <title>Rick and morty</title>
      </Head>
      <main>
        <Container>
        {
          character && (
            <ContainerCharacter>
              <Image 
                src={`${character?.image}`}
                width={400}
                height={400}
                alt={character?.name}
              />
              <Name>{character?.name}</Name>
              <Description>{ character?.gender } - { character?.status } - { character?.species }</Description>
            </ContainerCharacter>
          )
        }
        </Container>
      </main>
    </>
  )
}
