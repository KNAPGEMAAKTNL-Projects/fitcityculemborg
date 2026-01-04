export interface PricingCardData {
  id: string;
  name: string;
  price: string;
  term: string;
  features: string[];
}

export const pricingData = {
  main: [
    {
      id: 'smart-deal',
      name: 'Smart Deal',
      price: '24,50',
      term: '12 maanden',
      features: ['Onbeperkt fitness'],
    },
    {
      id: 'combi-deal',
      name: 'Combi Deal',
      price: '39,50',
      term: '12 maanden',
      features: ['Onbeperkt fitness', 'Voor 2 personen'],
    },
    {
      id: 'ultimate-fit',
      name: 'Ultimate Fit Deal',
      price: '37,50',
      term: '12 maanden',
      features: ['Onbeperkt fitness', 'Kickboxing inclusief'],
    },
    {
      id: 'fit-deal',
      name: 'Fit Deal',
      price: '29,50',
      term: '6 maanden',
      features: ['Onbeperkt fitness'],
    },
    {
      id: 'maand-flex',
      name: 'Maand Flex',
      price: '37,00',
      term: 'Maandelijks',
      features: ['Onbeperkt fitness', 'Opzeggen wanneer je wilt*'],
    },
    {
      id: 'quick-deal',
      name: 'Quick Deal',
      price: '99,00',
      term: '3 maanden',
      features: ['Eenmalige betaling', 'Verloopt automatisch'],
    },
  ] as PricingCardData[],

  ladies: [
    {
      id: 'ladies-jaar',
      name: 'Ladies Only Jaar',
      price: '20,50',
      term: '12 maanden',
      features: ['Ladies Only zone', 'Algemene fitness'],
    },
    {
      id: 'ladies-halfjaar',
      name: 'Ladies Halfjaar',
      price: '25,50',
      term: '6 maanden',
      features: ['Ladies Only zone', 'Algemene fitness'],
    },
    {
      id: 'ladies-flex',
      name: 'Ladies Flex',
      price: '32,00',
      term: 'Maandelijks',
      features: ['Ladies Only zone', 'Algemene fitness', 'Opzeggen wanneer je wilt*'],
    },
  ] as PricingCardData[],

  kickboxing: [
    {
      id: 'kb-1x',
      name: 'Kickboxing 1x p/w',
      price: '19,95',
      term: '12 maanden',
      features: ['1 les per week'],
    },
    {
      id: 'kb-unlimited',
      name: 'Kickboxing Unlimited',
      price: '26,95',
      term: '12 maanden',
      features: ['Onbeperkt lessen'],
    },
  ] as PricingCardData[],

  dayPass: {
    id: 'day-pass',
    name: 'Dagpas',
    price: '7,00',
    term: 'Eenmalig',
    features: ['Toegang voor 1 dag'],
  } as PricingCardData,
};

export interface ScheduleItem {
  day: string;
  time: string;
}

export const kickboxingSchedule: ScheduleItem[] = [
  { day: 'Dinsdag', time: '19:00 - 20:00' },
  { day: 'Donderdag', time: '19:00 - 20:00' },
  { day: 'Zondag', time: '10:00 - 11:00' },
];
