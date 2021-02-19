import { Comment } from '../../types/comment'
import CommentsComponent from '../../components/comments'
import { getComments } from '../comments/api';

export default function Home({comments}) {
  const topComment = comments[0]
  const restComments = comments.slice(1)
  return (
    <div>
      <CommentsComponent comments={restComments as Array<Comment>} />
    </div>
  )
}

export async function getStaticProps() {
  const comments: Array<Comment> = await getComments()

  return {
    props: { comments }
  }
}
