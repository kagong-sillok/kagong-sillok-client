export {};

declare global {
  interface APIResponse<T = void> {
    result?: string;
    message?: string;
    data: T;
  }

  type Modify<T, R> = Omit<T, keyof R> & R;

  type Coordinates = {
    lat: number;
    lng: number;
  };
}
