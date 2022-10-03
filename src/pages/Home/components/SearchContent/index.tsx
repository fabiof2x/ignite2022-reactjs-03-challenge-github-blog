import { SearchContentContainer } from './styles'

export function SearchContent() {
  return (
    <SearchContentContainer>
      <div>
        <p>Publicações</p>
        <span>5 publicações</span>
      </div>
      <input type="text" placeholder="Buscar Conteúdo" />
    </SearchContentContainer>
  )
}
