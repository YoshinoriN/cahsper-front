import Timeline from '@material-ui/lab/Timeline';
import CommentComponent from './comment';

import { Comment } from '../../types/comment'

const CommentsComponent: React.FunctionComponent<{ comments: Array<Comment> }> = ({comments}) => {
  return(
    <Timeline align="left">
      {comments.map((comment) => {
        return  <CommentComponent comment={comment} />
      })}
    </Timeline>
  )
}

export default CommentsComponent;
