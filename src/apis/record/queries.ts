import { getTimelineRecords, getPlaceRecords, getMemberRecords } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';
import { useQuery } from '@tanstack/react-query';

export function useTimelineRecords(memberId: number, year: number, month: number) {
  return useSuspenseQuery(
    Keys.timelineRecords(year, month),
    () => getTimelineRecords(memberId, year, month),
    {
      enabled: memberId > 0,
      refetchOnMount: 'always',
    }
  );
}

export function usePlaceRecords(memberId: number) {
  return useSuspenseQuery(Keys.placeRecords(), () => getPlaceRecords(memberId), {
    enabled: memberId > 0,
    refetchOnMount: 'always',
  });
}

export function useMemberRecords(memberId: number) {
  return useSuspenseQuery(Keys.memberRecords(memberId), () => getMemberRecords(memberId), {
    enabled: memberId > 0,
    refetchOnMount: 'always',
  });
}

export function useMemberTotalDuration(memberId: number) {
  return useQuery(Keys.memberRecords(memberId), () => getMemberRecords(memberId), {
    enabled: memberId > 0,
    refetchOnMount: 'always',
    select: (data) => data.studyRecords.reduce((acc, cur) => acc + cur.duration, 0) || 0,
  });
}
