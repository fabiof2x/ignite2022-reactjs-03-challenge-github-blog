import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
    }

    body {
      background: ${({ theme }) => theme.colors["base-background"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      line-height: 160%;
      -webkit-font-smoothing: antialiased;
    }

    body, input {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: ${({ theme }) => theme.textSizes['text-m']}
    }
  }
`