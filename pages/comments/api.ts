import { CommentResponse } from '../../types/comment'
import { api } from '../../config'

export async function getComments(): Promise<Array<CommentResponse>> {
  const CommentResponse: Promise<Array<CommentResponse>> = await fetch(
    `https://${api.url}/comments/`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then((response) => response.json())
  // TODO: error handling
  return CommentResponse
}
