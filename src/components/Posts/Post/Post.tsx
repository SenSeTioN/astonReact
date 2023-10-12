import { PostProps } from '../../types/types'
import './Post.scss'

function Post(props: PostProps) {
  const { title, body } = props

  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post
