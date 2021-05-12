import {Link} from 'react-router-dom'

export default function CampsitePosts(props) {
  const posts = props.posts

  return (
    <div>
      {posts.map((post) => {
        if (post.campsite_id === props.campsite) {
          return (
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          )
        }
      })}
    </div>
  )
}
