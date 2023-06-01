import axios from 'axios';

export const getPlace = async () => {
  const { data } = await axios('/db/place.json');

  return data;
};
