declare namespace Common {
  interface Response<T> {
    result?: string;
    message?: string;
    data: T;
  }
  type Modify<T, R> = Omit<T, keyof R> & R;
}
