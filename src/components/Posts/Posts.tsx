import React, { useEffect, useState } from 'react'
import { PostProps } from '../types/types'
import Post from './Post/Post'
import './Posts.scss'

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts)
        setPosts(posts)
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>Error: {error}</h1>
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>Posts</h1>
      <hr />
      <div className='posts'>
        {isLoading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : (
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </React.Fragment>
  )
}

export default Posts
