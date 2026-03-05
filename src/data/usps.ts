export interface USPData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const uspData: USPData[] = [
  {
    id: 'price-leader',
    icon: 'tag',
    title: 'Beste Prijs',
    description: 'Fitness vanaf 24,50 per maand. Ladies Only vanaf 20,50. Nergens in Culemborg train je voordeliger.'
  },
  {
    id: 'ladies-only',
    icon: 'users',
    title: 'Ladies Only',
    description: 'Een aparte trainingsvloer alleen voor vrouwen. Volledig uitgerust, volledige privacy.'
  },
  {
    id: 'no-fluff',
    icon: 'check',
    title: 'Geen Gedoe',
    description: 'Personeel aanwezig tijdens alle openingstijden. Hulp nodig? Gewoon vragen.'
  },
  {
    id: 'raw-vibe',
    icon: 'dumbbell',
    title: 'Echte Gym Sfeer',
    description: 'Geen steriele witte muren. Rauw, energiek en gebouwd om in te trainen.'
  },
];
