import styled from 'styled-components'

export const SearchContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-s']};
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    color: ${({ theme }) => theme.colors['base-text']};
    transition: 0.4s;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
