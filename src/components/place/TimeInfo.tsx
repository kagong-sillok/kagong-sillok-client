import type { DayType, PlaceType } from '@/types/place';

interface TimeInfoProps {
  businessHours: PlaceType['businessHours'];
}

export default function TimeInfo({ businessHours }: TimeInfoProps) {
  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
  };

  const daysOfWeek = {
    monday: '월',
    tuesday: '화',
    wednesday: '수',
    thursday: '목',
    friday: '금',
    saturday: '토',
    sunday: '일',
  };

  return (
    <div>
      {Object.entries(businessHours).map(([day, { open, close }]) => (
        <div key={day} className="mb-1 mt-2.5 flex gap-1.5 text-body2">
          <div>{daysOfWeek[day as DayType]}</div>
          <div>
            {formatTime(open)} - {formatTime(close)}
          </div>
        </div>
      ))}
    </div>
  );
}
