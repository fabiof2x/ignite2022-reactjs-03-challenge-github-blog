/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import { PostDataDTO } from '../../../../interfaces/PostDataDTO'
import { PostDataContainer } from './styles'

export interface PostDataProps {
  post: PostDataDTO
}

export function PostData({ post }: PostDataProps) {
  return (
    <PostDataContainer>
      <ReactMarkdown children={post.body} />
    </PostDataContainer>
  )
}
