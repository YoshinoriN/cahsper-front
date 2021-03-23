import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

import { Comment } from '../../types/comment'

const CommentComponent: React.FunctionComponent<{ comment: Comment }> = ({comment}) => {
  return(
    <TimelineItem>
      <TimelineOppositeContent style={{flex: 0.2}}>
        <Typography className="local-date-time" color="textSecondary">
          {comment.createdAt}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector style={{opacity: 0.3, width: 1}} />
      </TimelineSeparator>
    <TimelineContent>
      <Typography color="textSecondary">
        {comment.comment}
      </Typography>
    </TimelineContent>
  </TimelineItem>
  )
}

export default CommentComponent;
