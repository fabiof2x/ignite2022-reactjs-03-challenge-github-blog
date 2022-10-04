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

export function PostInfo() {
  const navigate = useNavigate()

  return (
    <PostCardContainer>
      <PostInfoContainer>
        <Link onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <Link href="#">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostInfoContainer>
      <PostTitle>Boas práticas para devs em início de carreira</PostTitle>
      <PostDataContainer>
        <PostData>
          <FontAwesomeIcon icon={faGithub} />
          fabiof2x
        </PostData>
        <PostData>
          <FontAwesomeIcon icon={faCalendarDay} />
          há 2 meses
        </PostData>
        <PostData>
          <FontAwesomeIcon icon={faComment} />0 comentários
        </PostData>
      </PostDataContainer>
    </PostCardContainer>
  )
}
