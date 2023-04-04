import Image from "next/image";
import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { CharactersContext } from '../../providers/characters'
import { useState } from "react";
import { styled } from '../../styles'

const Container = styled('div', {
    padding: '15px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
})

const ContainerCharacter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

const Name = styled('h1', {
    fontSize: 40,
    color: '$secondary',
    marginTop: 8
})

const Description = styled('p', {
    fontSize: 22,
    color: 'white',
    marginTop: 4
})

export default function Character() {

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
