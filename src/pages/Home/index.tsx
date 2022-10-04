import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchContent } from './components/SearchContent'
import { HomeContainer, PostContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchContent />
      <PostContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostContainer>
    </HomeContainer>
  )
}
