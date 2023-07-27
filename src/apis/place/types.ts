import type { DayType, LinkType } from '@/types/place';

export interface BusinessHour {
  dayOfWeek: DayType;
  open: string;
  close: string;
}

export interface Place {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  imageIds: number[];
  tags: string[]; // ['#조용한', '#나만알고싶은', '#노트북']
  rating: number;
  isOpen: boolean;
  phone: string; // 02-1234-1234
  links: {
    linkType: LinkType;
    url: string;
  }[];
  businessHours: [
    Common.Modify<BusinessHour, { dayOfWeek: 'MONDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'TUESDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'WEDNESDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'THURSDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'FRIDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'SATURDAY' }>,
    Common.Modify<BusinessHour, { dayOfWeek: 'SUNDAY' }>
  ];
}

export interface PlacesAround {
  latitude: number;
  longitude: number;
  latitudeBound: number;
  longitudeBound: number;
}
