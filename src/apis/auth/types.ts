export interface LoginPayload {
  authorizationCode: string;
  redirectUri: string;
}

export interface LoginResponse {
  accessToken: string;
}
