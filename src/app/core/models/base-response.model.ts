export interface BaseResponseInterface<T> {
  code: string;
  desc: string;
  message: string;
  data: T;
}
