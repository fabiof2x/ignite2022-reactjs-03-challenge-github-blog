import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  gap: 2rem;
`

export const ProfileCardAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  margin-left: 0.5rem;
`

export const ProfileCardInfos = styled.div`
  width: 100%;
`

export const ProfileUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ProfileName = styled.div`
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  font-weight: 700;
  line-height: 130%;
`

export const GithubLink = styled.a`
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

  &:hover {
    transition: border-color 0.4s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`

export const ProfileBio = styled.div`
  margin-top: 0.5rem;
`

export const ProfileInfoContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.textSizes['text-m']};

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
    height: 18px;
    width: 18px;
  }
`
