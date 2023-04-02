
import { styled } from '@/styles'

export const Container = styled('div', {
    padding: '15px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
})

export const ContainerCharacter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

export const Name = styled('h1', {
    fontSize: 40,
    color: '$secondary',
    marginTop: 8
})

export const Description = styled('p', {
    fontSize: 22,
    color: 'white',
    marginTop: 4
})