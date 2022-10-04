import styled from 'styled-components'

export const PostDataContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 1px solid transparent;
    font-weight: 700;
    height: 1.1875rem;
    cursor: pointer;

    &:hover {
      transition: border-color 0.4s;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-width: 800px;
    margin-bottom: 1rem;
  }

  ul {
    li {
      margin-bottom: 1rem;
      list-style-position: inside;
    }
  }
`
