import ky from 'ky';

import type { PlaceType } from '@/types/place';

export const getPlace = async (id: string) => {
  console.log('getPlace: ', id);
  const data = await ky.get('/db/place.json');

  return data.json<PlaceType>();
};
