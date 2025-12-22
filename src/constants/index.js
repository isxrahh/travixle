import {
  Hotel,
  Home,
  Plane,
  Train,
  Bus,
  Car,
  Ticket,
  Ship,
  Globe,
  CreditCard,
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
