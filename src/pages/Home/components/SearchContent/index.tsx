import { SearchContentContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchContentProps {
  totalPosts: number
  fetchPostsData: (query?: string) => Promise<void>
}

export function SearchContent({
  totalPosts,
  fetchPostsData,
}: SearchContentProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPostsData(data.query)
  }

  return (
    <SearchContentContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <p>Publicações</p>
        <span>
          {totalPosts} {totalPosts === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>
      <input type="text" placeholder="Buscar Conteúdo" {...register('query')} />
    </SearchContentContainer>
  )
}
