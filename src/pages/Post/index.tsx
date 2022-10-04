import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PostDataDTO } from '../../interfaces/PostDataDTO'
import { PostData } from './components/PostData'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

interface LocationType {
  state: PostDataDTO
}

export function Post() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <PostContainer>
      <PostInfo post={state} />
      <PostData post={state} />
    </PostContainer>
  )
}
