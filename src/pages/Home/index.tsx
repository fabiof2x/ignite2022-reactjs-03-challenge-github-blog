import { ProfileCard } from './components/ProfileCard'
import { SearchContent } from './components/SearchContent'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchContent />
    </HomeContainer>
  )
}
