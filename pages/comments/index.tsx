import { Comment, CommentResponse } from '../../types/comment'
import CommentsComponent from '../../components/comments/comments'
import { getComments } from '../comments/api';
import { Container } from '@material-ui/core';
import { convertUnixtimeToDate } from '../../utils/time';

export default function Home({comments}) {
  const c = comments.slice(0)
  return (
    <Container maxWidth="md">
      <CommentsComponent comments={c as Array<Comment>} />
    </Container>
  )
}

export async function getStaticProps() {
  const commentResponse: Array<CommentResponse> = await getComments()
  const comments = commentResponse.map(comment => {
    return {
      id: comment.id,
      userName: comment.userName,
      comment: comment.comment,
      createdAt: convertUnixtimeToDate(comment.createdAt).toLocaleString()
    } as Comment
  });

  return {
    props: { comments }
  }
}
