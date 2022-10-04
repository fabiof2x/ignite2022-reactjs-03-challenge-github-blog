import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
`
export const PostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid transparent;
  font-size: ${({ theme }) => theme.textSizes.link};
  font-weight: 700;
  height: 1.1875rem;
  line-height: 0;
  cursor: pointer;

  &:hover {
    transition: border-color 0.4s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`

export const PostTitle = styled.div`
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  font-weight: 700;
  line-height: 130%;

  margin-top: 1.25rem;
`

export const PostDataContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1.5rem;
`

export const PostData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.textSizes['text-m']};
  color: ${({ theme }) => theme.colors['base-span']};

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
    height: 18px;
    width: 18px;
  }
`
