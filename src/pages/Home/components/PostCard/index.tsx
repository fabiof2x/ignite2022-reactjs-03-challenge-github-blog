import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostData } from '../../../../interfaces/PostData'
import { PostCardContainer, PostCardHeader, PostContent } from './styles'

interface PostDataProps {
  post: PostData
}

export function PostCard({ post }: PostDataProps) {
  console.log(post)
  return (
    <PostCardContainer href="/post">
      <PostCardHeader>
        <h2>{post.title}</h2>
        <span>
          {' '}
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostCardHeader>
      <PostContent>{post.body}</PostContent>
    </PostCardContainer>
  )
}
