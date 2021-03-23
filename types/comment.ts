export interface Comment {
  id: number,
  userName: string,
  comment: string,
  createdAt: Date
}

export interface CommentResponse {
  id: number,
  userName: string,
  comment: string,
  createdAt: number
}
