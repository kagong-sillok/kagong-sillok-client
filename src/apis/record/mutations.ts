import { postRecord } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostRecord = () => {
  return useMutation(postRecord);
};
