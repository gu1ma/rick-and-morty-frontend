import { CharactersProvider } from '@/providers/characters';
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CharactersProvider>
      <Component {...pageProps} />
    </CharactersProvider>
  )
}

export default App;
