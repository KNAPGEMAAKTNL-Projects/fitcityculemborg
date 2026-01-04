export interface OpeningHoursDisplay {
  day: string;
  hours: string;
}

export const openingHours: OpeningHoursDisplay[] = [
  { day: 'Maandag - Vrijdag', hours: '08:30 - 22:00' },
  { day: 'Zaterdag', hours: '09:00 - 16:00' },
  { day: 'Zondag', hours: '09:30 - 16:00' },
];

export interface DayHours {
  open: string;
  close: string;
}

export const openingHoursDetailed: Record<number, DayHours> = {
  0: { open: '09:30', close: '16:00' }, // Sunday
  1: { open: '08:30', close: '22:00' }, // Monday
  2: { open: '08:30', close: '22:00' }, // Tuesday
  3: { open: '08:30', close: '22:00' }, // Wednesday
  4: { open: '08:30', close: '22:00' }, // Thursday
  5: { open: '08:30', close: '22:00' }, // Friday
  6: { open: '09:00', close: '16:00' }, // Saturday
};
