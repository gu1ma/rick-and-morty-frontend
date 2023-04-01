import Button from '@/components/Button'
import Character from '@/components/Character'
import HeaderComponent from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import Title from '@/components/Title'
import { CharactersContext, ICharacter } from '@/providers/characters'
import { styled } from '@/styles'
import Head from 'next/head'
import { useContext } from 'react'

const Container = styled('main', {
  padding: '0px 15px'
})

const ContainerSearch = styled('section', {
  display: 'flex'
})

const ContainerCharacter = styled('main', {
  display: 'grid',
  columnGap: 50,
  rowGap: 30,
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  marginTop: 32,
})

export default function Home() {
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <Head>
        <title>Rick and morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderComponent />
        <Container>
        <Title>Busque por um personagem</Title>
          <ContainerSearch>
            <SearchInput />
            <Button>Buscar</Button>
          </ContainerSearch>
          <ContainerCharacter>
            {
            characters.map(({ id, image, name, species }: ICharacter) => (
              <Character 
                key={id}
                imgUrl={image}
                name={name}
                desc={species}
              />
            ))}
          </ContainerCharacter>
        </Container>
      </main>
    </>
  )
}
