export interface ImageObject {
  url: string;
  width: number;
  height: number;
  extension: string;
}

export interface ImageObjectWithId extends ImageObject {
  id: number;
}
