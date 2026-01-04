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
    description: 'De goedkoopste sportschool van Culemborg. Ladies Only al vanaf €20,50 per maand.'
  },
  {
    id: 'ladies-only',
    icon: 'users',
    title: 'Ladies Only',
    description: 'Eigen damesvloer beneden voor privacy en comfort tijdens het trainen.'
  },
  {
    id: 'no-fluff',
    icon: 'check',
    title: 'Geen Gedoe',
    description: 'Altijd personeel aanwezig, gratis begeleiding, geen verborgen kosten.'
  },
  {
    id: 'raw-vibe',
    icon: 'dumbbell',
    title: 'Raw Energy',
    description: 'Industriële, high-energy vibe. Geen steriele medische sfeer.'
  },
];
