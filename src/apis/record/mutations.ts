import { postStudyRecord } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostStudyRecord(memberId: number) {
  const queryClient = useQueryClient();

  return useMutation(postStudyRecord, {
    onSuccess: () => {
      queryClient.invalidateQueries(['placeRecords']);
      queryClient.invalidateQueries(['memberRecords', memberId]);
    },
  });
}
