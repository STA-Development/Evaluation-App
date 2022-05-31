export interface User {
  displayName: string
  uid: string
  email: string
  authToken: string
}

export interface IToken {
  refreshToken: string,
  accessToken: string,
  expirationTime: number
}