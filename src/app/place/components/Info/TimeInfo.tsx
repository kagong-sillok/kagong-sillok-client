import { DAYS_OF_WEEK } from '@/app/place/constants';
import { formatTime } from '@/utils/formatTime';

import type { Place, DayType } from '@/types/place';

interface TimeInfoProps {
  businessHours: Place['businessHours'];
}

export default function TimeInfo({ businessHours }: TimeInfoProps) {
  return (
    <div>
      {Object.entries(businessHours).map(([day, { open, close }]) => (
        <div key={day} className="mb-1 mt-2.5 flex gap-1.5 text-body2">
          <div>{DAYS_OF_WEEK[day as Lowercase<DayType>]}</div>
          <div>
            {formatTime(open)} - {formatTime(close)}
          </div>
        </div>
      ))}
    </div>
  );
}
