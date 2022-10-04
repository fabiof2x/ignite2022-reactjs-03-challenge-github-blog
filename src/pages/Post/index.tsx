import { PostData } from './components/PostData'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostData />
    </PostContainer>
  )
}
