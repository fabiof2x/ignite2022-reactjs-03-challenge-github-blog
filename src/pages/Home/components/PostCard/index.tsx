import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import { PostDataDTO } from '../../../../interfaces/PostDataDTO'
import { PostCardContainer, PostCardHeader, PostContent } from './styles'

interface PostDataProps {
  post: PostDataDTO
}

export function PostCard({ post }: PostDataProps) {
  const navigate = useNavigate()

  function handleShowPost(post: PostDataDTO) {
    navigate('/post', {
      state: post,
    })
  }

  return (
    <PostCardContainer onClick={() => handleShowPost(post)}>
      <PostCardHeader>
        <h2>{post.title}</h2>
        <span>
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
