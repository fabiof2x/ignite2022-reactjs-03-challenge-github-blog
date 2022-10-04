import { PostCardContainer, PostCardHeader, PostContent } from './styles'

export function PostCard() {
  return (
    <PostCardContainer href="#">
      <PostCardHeader>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 2 meses</span>
      </PostCardHeader>
      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </PostContent>
    </PostCardContainer>
  )
}
