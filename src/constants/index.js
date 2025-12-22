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