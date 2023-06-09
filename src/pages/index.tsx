import Character from '../components/Character'
import SearchInput from '../components/SearchInput'
import Title from '../components/Title'
import { CharactersContext, ICharacter } from '../providers/characters'
import { styled } from '../styles'
import Head from 'next/head'
import { useContext } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import Link from 'next/link'

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
  gridTemplateColumns: '1fr',
  marginTop: 32,

  a: {
    color: 'transparent'
  },
  '@smallMobile': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@mobile': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@tablet': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@desktop': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  }
})

export default function Home() {
  const { characters, page, setPage } = useContext(CharactersContext);

  useBottomScrollListener(() => setPage(page + 1), {
    offset: 0,
    debounce: 200
  })

  return (
    <>
      <Head>
        <title>Rick and morty</title>
      </Head>
      <main>
        <Container>
        <Title>Busque por um personagem</Title>
          <ContainerSearch>
            <SearchInput />
          </ContainerSearch>
          <ContainerCharacter>
            {
            characters.map(({ id, image, name, species }: ICharacter) => (
              <Link href={`/character/${id}`} key={id}>
                <Character 
                  imgUrl={image}
                  name={name}
                  desc={species}
                />
              </Link>
            ))}
          </ContainerCharacter>
        </Container>
      </main>
    </>
  )
}
