import { DAYS_OF_WEEK } from '@/app/place/constants';
import { Spacing } from '@/components';
import { formatTime } from '@/utils/formatTime';

import type { Place } from '@/types/place';

interface TimeInfoProps {
  businessHours: Place['businessHours'];
}

export default function TimeInfo({ businessHours }: TimeInfoProps) {
  return (
    <>
      <Spacing size={8} />
      <div className="flex flex-col gap-3">
        {businessHours.map(({ close, dayOfWeek, open }) => (
          <div key={dayOfWeek} className="flex gap-1.5 text-body2">
            <div>{DAYS_OF_WEEK[dayOfWeek]}</div>
            <div>
              {formatTime(open)} - {formatTime(close)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
