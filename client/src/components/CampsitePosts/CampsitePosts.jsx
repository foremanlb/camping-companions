import { Link } from 'react-router-dom'
import './CampsitePosts.css'

export default function CampsitePosts(props) {
  const posts = props.posts

  return (
    <div id='posts_container'>
      {posts.map((post) => {
        if (post.campsite_id === props.campsite) {
          return (
            <Link to={`/post/${post.id}`} key={post.id} className='post_list'>{post.title}</Link>
          )
        }
      })}
    </div>
  )
}
