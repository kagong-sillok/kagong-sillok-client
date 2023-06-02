import ky from 'ky';

import type { PlaceType } from '@/types/place';

export const getPlace = async () => {
  const data = await ky.get('/db/place.json');

  return data.json<PlaceType>();
};
