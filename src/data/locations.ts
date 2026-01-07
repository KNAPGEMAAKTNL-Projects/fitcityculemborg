import type { FAQItem } from './faq';

export interface LocationData {
    slug: string;
    name: string;
    seoTitle: string;
    seoDescription: string;
    headline: string;
    subheadline: string;
    introTitle: string;
    introText: string;
    distanceText: string;
    localFaqs: FAQItem[];
}

export const locations: LocationData[] = [
    {
        slug: 'culemborg',
        name: 'Culemborg',
        seoTitle: 'Fitness Culemborg | De Meest Betaalbare Sportschool',
        seoDescription: 'Zoek je een sportschool in Culemborg? FitCity is dé plek voor fitness, ladies only en kickboksen. Industriële vibe, de beste apparatuur en geen gedoe.',
        headline: 'FITNESS CULEMBORG',
        subheadline: 'De meest betaalbare sportschool van Culemborg',
        introTitle: 'DÉ SPORTSCHOOL VAN CULEMBORG',
        introText: 'Al sinds 2018 is FitCity Culemborg het adres voor iedereen die serieus aan zijn doelen wil werken zonder de hoofdprijs te betalen. Met onze ruime fitnessvloer, aparte Ladies Only benedenverdieping en energieke kickbokslessen bieden we een complete ervaring in een rauwe, industriële setting.',
        distanceText: 'Je vindt ons direct tegenover de Action en op slechts 10 minuten lopen vanaf het station.',
        localFaqs: [
            { question: 'Waar zit FitCity Culemborg?', answer: 'Je vindt ons aan de Houtweg 8 in Culemborg. We zijn centraal gelegen en goed bereikbaar.' },
            { question: 'Kan ik gratis parkeren?', answer: 'Ja, je kunt bij ons direct voor de deur parkeren.' }
        ]
    },
    {
        slug: 'beusichem',
        name: 'Beusichem',
        seoTitle: 'Fitness Beusichem | Sportschool FitCity Culemborg',
        seoDescription: 'Woon je in Beusichem en zoek je een sportschool? FitCity Culemborg ligt op slechts 5 minuten rijden. Fitness, Ladies Only en Kickboksen vanaf €20,50.',
        headline: 'FITNESS REGIO BEUSICHEM',
        subheadline: 'De coolste sportschool op 5 minuten van Beusichem',
        introTitle: 'FITNESS VOOR REGIO BEUSICHEM',
        introText: 'Woon je in Beusichem en zoek je een gym die net even anders is? FitCity Culemborg fungeert als dé sportschool voor de hele regio. Geen zin in een saaie circuit-sportschool? Kom dan bij ons trainen in een motiverende industriële vibe.',
        distanceText: 'Slechts 5 minuten rijden vanuit Beusichem.',
        localFaqs: [
            { question: 'Is FitCity goed bereikbaar vanuit Beusichem?', answer: 'Zeker! We zitten direct aan de rand van Culemborg (Houtweg 8), waardoor je vanuit Beusichem binnen 5 tot 7 minuten voor de deur staat.' }
        ]
    },
    {
        slug: 'buren',
        name: 'Buren',
        seoTitle: 'Fitness Buren | Sportschool FitCity Culemborg',
        seoDescription: 'Op zoek naar een sportschool in Buren? FitCity Culemborg is jouw budgetvriendelijke alternatief met een industriële vibe. Ontdek onze Ladies Only en fitness.',
        headline: 'FITNESS REGIO BUREN',
        subheadline: 'Industrieel trainen in de buurt van Buren',
        introTitle: 'DÉ GYM VOOR INWONERS VAN BUREN',
        introText: 'Inwoners van Buren die op zoek zijn naar een degelijke, betaalbare sportschool komen al jaren bij FitCity Culemborg. Wij bieden een breed scala aan faciliteiten, van krachttraining tot kickboksen, op een steenworp afstand van Buren.',
        distanceText: 'Ongeveer 10-12 minuten rijden vanuit Buren.',
        localFaqs: [
            { question: 'Waarom vanuit Buren naar FitCity Culemborg?', answer: 'In de regio Buren zijn wij de meest betaalbare optie en hebben we zelfs een dedicated Ladies Only zone.' }
        ]
    },
    {
        slug: 'tricht',
        name: 'Tricht',
        seoTitle: 'Fitness Tricht | Sportschool FitCity Culemborg',
        seoDescription: 'Lekker sporten vlakbij Tricht? FitCity Culemborg biedt fitness, ladies only en kickboksen zonder duur abonnement. Slechts enkele minuten rijden.',
        headline: 'FITNESS REGIO TRICHT',
        subheadline: 'Jouw sportschool in de regio Tricht',
        introTitle: 'SPORTEN IN DE REGIO TRICHT',
        introText: 'Zoek je een sportschool nabij Tricht? FitCity Culemborg is een uitstekend alternatief voor wie op zoek is naar een rauwe, industriële gym op slechts een paar minuten rijden. Onze nuchtere aanpak en budgetvriendelijke prijzen maken ons een populaire keuze voor jouw fitness journey.',
        distanceText: 'Binnen 10 minuten ben je vanuit Tricht bij onze sportschool.',
        localFaqs: [
            { question: 'Is er een directie verbinding vanuit Tricht?', answer: 'Met de auto rij je via de Rijksstraatweg in minder dan 10 minuten naar de Houtweg 8 in Culemborg.' }
        ]
    },
    {
        slug: 'buurmalsen',
        name: 'Buurmalsen',
        seoTitle: 'Fitness Buurmalsen | Sportschool FitCity Culemborg',
        seoDescription: 'Woonachtig in Buurmalsen? FitCity Culemborg is de meest betaalbare sportschool in de buurt. Geen gedoe, gewoon keihard trainen.',
        headline: 'FITNESS REGIO BUURMALSEN',
        subheadline: 'Dé sportschool voor inwoners van Buurmalsen',
        introTitle: 'FITNESS BIJ BUURMALSEN IN DE BUURT',
        introText: 'Voor inwoners van Buurmalsen die op zoek zijn naar een sportschool zonder poespas, is FitCity Culemborg dé logische keuze. Wij focussen op wat echt belangrijk is: goede apparatuur, een goede sfeer en een eerlijke prijs.',
        distanceText: 'Slechts een kleine 8 minuten rijden vanuit Buurmalsen.',
        localFaqs: [
            { question: 'Hoe ver is het rijden vanuit Buurmalsen?', answer: 'Je bent ongeveer 8 minuten onderweg van Buurmalsen naar onze locatie in Culemborg. Je kunt bij ons direct voor de deur parkeren.' }
        ]
    }
];
