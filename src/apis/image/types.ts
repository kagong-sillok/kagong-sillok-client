export interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
  extension: string;
}

export interface ImagesPayload {
  images: Omit<Image, 'id'>[];
}
