import styled from 'styled-components'

export const PostCardContainer = styled.a`
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  border: 2px solid transparent;

  text-decoration: none;
  transition: 0.4s;

  :hover {
    border-color: ${({ theme }) => theme.colors['base-span']};
  }
`

export const PostCardHeader = styled.article`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    font-weight: 700;
    max-width: 20ch;
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.textSizes['text-s']};
  }
`

export const PostContent = styled.article`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.textSizes['text-m']};
  margin-top: 1.125rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
`
