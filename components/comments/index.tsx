import { defaultCipherList } from 'constants'
import { Comment } from '../../types/comment'

const CommentsComponent: React.FunctionComponent<{ comments: Array<Comment> }> = ({comments}) => {
  return(
    <div>
      {comments.map((c) => {
        return c.comment
      })}
    </div>
  )
}

export default CommentsComponent;
