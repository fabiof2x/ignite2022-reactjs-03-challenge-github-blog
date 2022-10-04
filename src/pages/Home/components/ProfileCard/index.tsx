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
  ProfileCardInfos,
  ProfileUserContainer,
  ProfileName,
  GithubLink,
  ProfileBio,
  ProfileInfoContainer,
  ProfileInfo,
} from './styles'
import { ProfileData } from '../../../../interfaces/profileData'

interface ProfileCardProps {
  data: ProfileData
}

export function ProfileCard({ data }: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <ProfileCardAvatar src={data.avatar_url} alt={`Foto de ${data.name}`} />
      <ProfileCardInfos>
        <ProfileUserContainer>
          <ProfileName>{data.name}</ProfileName>
          <GithubLink href={`http://github.com/${data.login}`} target="_blank">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GithubLink>
        </ProfileUserContainer>
        <ProfileBio>{data.bio}</ProfileBio>
        <ProfileInfoContainer>
          <ProfileInfo>
            <FontAwesomeIcon icon={faGithub} />
            {data.login}
          </ProfileInfo>
          <ProfileInfo>
            <FontAwesomeIcon icon={faLocationDot} />
            {data.location}
          </ProfileInfo>
          <ProfileInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            {data.followers}
          </ProfileInfo>
        </ProfileInfoContainer>
      </ProfileCardInfos>
    </ProfileCardContainer>
  )
}
