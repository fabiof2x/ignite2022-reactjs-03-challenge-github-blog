import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  PostCardContainer,
  PostInfoContainer,
  Link,
  PostTitle,
  PostDataContainer,
  PostData,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostDataDTO } from '../../../../interfaces/PostDataDTO'

export interface PostInfoProps {
  post: PostDataDTO
}

export function PostInfo({ post }: PostInfoProps) {
  const navigate = useNavigate()

  return (
    <PostCardContainer>
      <PostInfoContainer>
        <Link onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <Link href={post.html_url} target="_blank">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostInfoContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostDataContainer>
        <PostData>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </PostData>
        <PostData>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </PostData>
        <PostData>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}
        </PostData>
      </PostDataContainer>
    </PostCardContainer>
  )
}
