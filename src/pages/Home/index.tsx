import { useEffect, useState } from 'react'
import { PostData } from '../../interfaces/PostData'
import { ProfileData } from '../../interfaces/profileData'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchContent } from './components/SearchContent'
import { HomeContainer, PostContainer } from './styles'

const username = 'fabiof2x'
const repoName = 'ignite2022-reactjs-03-challenge-github-blog-posts'

export function Home() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [postsData, setPostsData] = useState<PostData[]>([])

  async function fetchProfileData() {
    const response = await api.get(`users/${username}`)

    setProfileData(response.data)
  }

  async function fetchPostsData(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`,
    )

    setPostsData(response.data.items)
  }

  useEffect(() => {
    fetchProfileData()
    fetchPostsData()
  }, [])

  return (
    <HomeContainer>
      <ProfileCard data={profileData} />
      <SearchContent
        totalPosts={postsData.length}
        fetchPostsData={fetchPostsData}
      />
      <PostContainer>
        {postsData.map((post) => (
          <PostCard key={post.number} post={post} />
        ))}
      </PostContainer>
    </HomeContainer>
  )
}
