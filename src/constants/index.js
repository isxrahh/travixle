import {
    Hotel,
    Home,
    Plane,
    Train,
    Bus,
    Car,
    Ship,
    Globe,
    Shield,
    Calendar,
    MapPin,
    Landmark,
    DollarSign,
} from "lucide-react";

export const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/hotels", label: "Hotels", icon: Hotel },
    { href: "/stays", label: "Stays", icon: Home },
    { href: "/flights", label: "Flights", icon: Plane, highlight: true }, // optional highlight
    { href: "/homestays", label: "Homestays & Villas", icon: Landmark },
    { href: "/packages", label: "Holiday Packages", icon: Calendar },
    { href: "/trains", label: "Trains", icon: Train },
    { href: "/buses", label: "Buses", icon: Bus },
    { href: "/cabs", label: "Cabs", icon: Car },
    {
        href: "/tours",
        label: "Tours & Attractions",
        icon: MapPin,
        badge: "new",
    },
    { href: "/visa", label: "Visa", icon: Globe },
    {
        href: "/cruise",
        label: "Cruise",
        icon: Ship,
        badge: "new",
    },
    { href: "/forex", label: "Forex Card & Currency", icon: DollarSign, badge: "new", },
    { href: "/insurance", label: "Travel Insurance", icon: Shield },
];

export const offers = [
    {
        id: 1,
        title: "Flat 20% OFF on Domestic Flights",
        code: "FLYHIGH",
        description: "Use code on bookings above ₹5000",
        badge: "20% OFF",
        category: "Flights",
        imageUrl: "./assets/flights-1.jpg",
    },
    {
        id: 2,
        title: "Up to ₹10,000 OFF on International Flights",
        code: "WORLD2025",
        description: "Valid on Emirates, Qatar & more",
        badge: "₹10K OFF",
        category: "Flights",
        imageUrl: "./assets/flights-2.jpg",
    },
    {
        id: 3,
        title: "Extra 15% OFF on Hotels",
        code: "STAYMORE",
        description: "For bookings with 3+ nights",
        badge: "15% OFF",
        category: "Hotels",
        imageUrl: "./assets/hotels-1.jpg",

    },
    {
        id: 4,
        title: "Zero Convenience Fee on Trains",
        code: "NOFEE",
        description: "Limited period offer",
        badge: "ZERO FEE",
        category: "Trains",
        imageUrl: "./assets/trains-1.jpg",

    },
    {
        id: 5,
        title: "₹2000 Cashback on Holiday Packages",
        code: "DREAMTRIP",
        description: "Min booking ₹20,000",
        badge: "₹2K BACK",
        category: "Packages",
        imageUrl: "./assets/package.jpg",

    },

    {
        id: 6,
        badge: "ZERO FEE",
        title: "Train Bookings",
        description: "No convenience fee this season",
        code: "NOFEE",
        category: "Trains",
        imageUrl: "./assets/trains-2.jpg",

    },
    {
        id: 7,
        badge: "UP TO ₹1000 OFF",
        title: "Outstation Cabs",
        description: "One-way & round trip rides",
        code: "CABS1000",
        category: "Cabs",
        imageUrl: "./assets/cabs.jpg",

    },
    {
        id: 8,
        badge: "FLAT 12% OFF",
        title: "Tours & Activities",
        description: "Things to do worldwide • Code: WELCOME",
        code: "WELCOME",
        category: "Activities",
        imageUrl: "./assets/activities.jpg",

    },
    {
        id: 9,
        badge: "UP TO 55% OFF",
        title: "Plush Stays for Christmas & New Year",
        description: "Luxury hotels with festive deals",
        code: "LUXE55",
        category: "Hotels",
        imageUrl: "./assets/hotels-2.jpg",

    },
    {
        id: 10,
        badge: "FLAT 15% OFF",
        title: "Private Villas & Homestays",
        description: "Cozy stays with extra savings",
        code: "STAY15",
        category: "Stays",
        imageUrl: "./assets/stays.jpg",

    },
];

export const viewtabs = [
    { label: "All Offers", active: true },
    { label: "Bank Offers" },
    { label: "Flights" },
    { label: "Hotels" },
    { label: "Holidays" },
    { label: "Trains" },
    { label: "Cabs" },
    { label: "Bus" },
    { label: "Forex" },
    { label: "MORE", hasChevron: true },
]

export const airlines = [
    {
        id: 1,
        name: "AirAsia",
        imageUrl: "./assets/airasia.png",
    },
    {
        id: 2,
        name: "Indigo",
        imageUrl: "./assets/indigo.png",
    },
    {
        id: 3,
        name: "Singapore Airlines",
        imageUrl: "./assets/singaporeairlines.png",
    },
]

export const hotels = [
    {
        id: 1,
        title: "ITC Sonar",
        imageUrl: "./assets/itc_sonar.png",
    },
    {
        id: 2,
        title: "JW Marriott Hotel",
        imageUrl: "./assets/jw_marriott.jpg",
    },
    {
        id: 3,
        title: "Hyatt Regency",
        imageUrl: "./assets/hyatt_regency.jpg",
    },
    {
        id: 4,
        title: "Taj Palace",
        imageUrl: "./assets/taj_palace.jpg",
    },
]

export const destinations = [
    {
        id: 1,
        name: "Amritsar, India",
        description: "Home to the shimmering Golden Temple, where spiritual hymns and selfless service create a divine, peaceful atmosphere.",
        imageUrl: "../assets/amritsar.jpg",
        badge: "TOP 5",
    }, {
        id: 2,
        name: "Amber Fort, Jaipur",
        description: "A majestic sandstone citadel overlooking Maota Lake, blending Rajput bravery with intricate Mughal-style aesthetic beauty.",
        imageUrl: "../assets/amber.webp",
        badge: "TOP 8",

    }, {
        id: 3,
        name: "Andaman, India",
        description: "A tropical paradise of turquoise waters and white sands, hiding vibrant coral reefs beneath the gentle waves.",
        imageUrl: "../assets/andaman.jpg",
        badge: "TOP 9",

    }, {
        id: 4,
        name: "Ajanta caves, Maharashtra",
        description: "These ancient rock-cut masterpieces house exquisite Buddhist frescoes that have survived the passage of centuries.",
        imageUrl: "../assets/caves.avif",
        badge: "TOP 12",

    }, {
        id: 5,
        name: "Great Wall of China",
        description: "An awe-inspiring stone dragon snaking across misty mountains, echoing the grandeur of ancient imperial defense.",
        imageUrl: "../assets/china.jpg",
        badge: "TOP 3",

    }, {
        id: 6,
        name: "Burj Khalifa, Dubai",
        description: "A shimmering silver needle piercing the clouds, representing the absolute pinnacle of modern architectural ambition.",
        imageUrl: "../assets/dubai.webp",
        badge: "TOP 4",

    }, {
        id: 7,
        name: "Pyramid Of Giza, Egypt",
        description: "The last standing ancient wonder, these silent limestone giants hold the eternal secrets of pharaohs.",
        imageUrl: "../assets/egypt.webp",
        badge: "TOP 10",

    }, {
        id: 8,
        name: "Taj Mahal, India",
        description: "A breathtaking symphony in white marble, this poetry in stone stands as a timeless testament to eternal love.",
        imageUrl: "../assets/india.webp",
        badge: "TOP 2",

    }, {
        id: 9,
        name: "Kerala",
        description: "Known as God’s Own Country, where emerald backwaters wind through swaying palms and lush, misty tea plantations.",
        imageUrl: "../assets/kerala.jpg",
        badge: "TOP 14",

    }, {
        id: 10,
        name: "Manali",
        description: "A snow-capped Himalayan sanctuary offering adrenaline-pumping adventures and serene cedar forests for the soul-seeking traveler.",
        imageUrl: "../assets/manali.jpg",
        badge: "TOP 7",

    }, {
        id: 11,
        name: "Statue of Liberty, New York",
        description: "A colossal copper guardian in New York Harbor, lighting the way with the torch of freedom.",
        imageUrl: "../assets/nyc.webp",
        badge: "TOP 15",

    }, {
        id: 12,
        name: "Eiffel Tower, Paris",
        description: "Paris’s iron heartbeat, offering a romantic silhouette that transforms into a sparkling gold lattice at night.",
        imageUrl: "../assets/paris.jpg",
        badge: "TOP 6",

    },
    {
        id: 13,
        name: "Qutub Minar, Delhi",
        description: "A towering fluted masterpiece of Indo-Islamic architecture, standing as a brick-red sentinel of Delhi’s rich history.",
        imageUrl: "../assets/qutub_minar.jpg",
        badge: "TOP 12",

    },
    {
        id: 14,
        name: "Sydney, Austrailia",
        description: "A vibrant harbor city where the sails of the Opera House meet world-class surfing at Bondi Beach.",
        imageUrl: "../assets/sydney.png",
        badge: "TOP 9",

    },
    {
        id: 15,
        name: "Udaipur, Rajasthan",
        description: "The City of Lakes, where marble palaces float on shimmering waters, reflecting the timeless romance of Rajasthan.",
        imageUrl: "../assets/udaipur.jpg",
        badge: "TOP 1",

    },
]

export const wonders = [
    {
        id: 1,
        name: "Tamil Nadu's Charming Hill Town",
        imageUrl:"../assets/tn.avif",
    },
    {
        id: 2,
        name: "Picturesque Gateway to Himalayas",
        imageUrl:"../assets/himalayas.avif",

    },
    {
        id: 3,
        name: "Quaint Little Hill Station in Gujarat",
        imageUrl:"../assets/gujarat.avif",

    },
    {
        id: 4,
        name: "A pleasant summer retreat and a snowy winter wonderland!",
        imageUrl:"../assets/wonderland.avif",

    },
    {
        id: 5,
        name: "Seaside Resort Village in West Bengal",
        imageUrl:"../assets/wb.avif",

    },
    {
        id: 6,
        name: "Hidden Gem along Maharashtra's Coast",
        imageUrl:"../assets/maharashtra.avif",

    },
    {
        id: 7,
        name: "Picture-Perfect Hill Station in Tamil Nadu",
        imageUrl:"../assets/tn-2.webp",

    },
    {
        id: 8,
        name: "Hill Retreat in Andhra Pradesh",
        imageUrl:"../assets/ap.avif",

    },
]
