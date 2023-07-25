import { postLogin } from '.';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export function useLoginMutation(
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof postLogin>>,
    unknown,
    Parameters<typeof postLogin>[0]
  >
) {
  return useMutation(postLogin, options);
}
