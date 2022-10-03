import styled from 'styled-components'
import headerBg from '../../assets/img/headerBg.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -5.625rem;
  }
`
