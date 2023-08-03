import {
  dehydrate,
  Hydrate,
  QueryClient,
  type QueryKey,
  type QueryFunction,
} from '@tanstack/react-query';
import { cache, type PropsWithChildren } from 'react';

interface HydrationProviderProps {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  isInfiniteQuery?: boolean;
}

export const HydrationProvider = async ({
  children,
  queryKey,
  queryFn,
  isInfiniteQuery = false,
}: PropsWithChildren<HydrationProviderProps>) => {
  const getQueryClient = cache(() => new QueryClient());

  const queryClient = getQueryClient();

  if (isInfiniteQuery) await queryClient.prefetchInfiniteQuery(queryKey, queryFn);
  else await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
