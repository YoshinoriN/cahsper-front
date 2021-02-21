import { Comment } from '../../types/comment'
import CommentsComponent from '../../components/comments/comments'
import { getComments } from '../comments/api';
import { Container } from '@material-ui/core';

export default function Home({comments}) {
  const c = comments.slice(0)
  return (
    <Container maxWidth="md">
      <CommentsComponent comments={c as Array<Comment>} />
    </Container>
  )
}

export async function getStaticProps() {
  const comments: Array<Comment> = await getComments()
  return {
    props: { comments }
  }
}
