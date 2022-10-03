import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileCardContainer,
  ProfileCardAvatar,
  ProfileUserContainer,
  ProfileName,
  GithubLink,
  ProfileBio,
  ProfileInfoContainer,
  ProfileInfo,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileCardAvatar
        src="http://github.com/fabiof2x.png"
        alt="Foto de Fábio Dias"
      />
      <div>
        <ProfileUserContainer>
          <ProfileName>Fábio Dias</ProfileName>
          <GithubLink href="http://github.com/fabiof2x" target="_blank">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GithubLink>
        </ProfileUserContainer>
        <ProfileBio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileBio>
        <ProfileInfoContainer>
          <ProfileInfo>
            <FontAwesomeIcon icon={faGithub} />
            fabiof2x
          </ProfileInfo>
          <ProfileInfo>
            <FontAwesomeIcon icon={faLocationDot} />
            Brasília-DF
          </ProfileInfo>
          <ProfileInfo>
            <FontAwesomeIcon icon={faUserGroup} />7
          </ProfileInfo>
        </ProfileInfoContainer>
      </div>
    </ProfileCardContainer>
  )
}
