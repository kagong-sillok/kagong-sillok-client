export type LoginPayload = {
  authorizationCode: string;
  redirectUri: string;
};

export type LoginResponse = {
  accessToken: string;
};
