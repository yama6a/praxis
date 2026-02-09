import type { IconType } from "react-icons";
import {
  MdHome,
  MdPayments,
  MdSelfImprovement,
  MdSpa,
  MdLocalOffer,
} from "react-icons/md";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem =
  | { kind: "link"; label: string; href: string; icon: IconType }
  | { kind: "dropdown"; label: string; items: NavLink[]; icon: IconType };

export const navigationItems: NavItem[] = [
  { kind: "link", label: "Startseite", href: "/", icon: MdHome },
  { kind: "link", label: "Preise", href: "/preise", icon: MdPayments },
  {
    kind: "dropdown",
    label: "Yoga",
    icon: MdSelfImprovement,
    items: [
      { label: "Yoga Allgemein", href: "/yoga/allgemein" },
      { label: "Yoga auf dem Stuhl", href: "/yoga/stuhl" },
    ],
  },
  {
    kind: "dropdown",
    label: "Shiatsu",
    icon: MdSpa,
    items: [
      { label: "Shiatsu Allgemein", href: "/shiatsu/allgemein" },
      { label: "Shiatsu in Betrieben", href: "/shiatsu/betriebe" },
    ],
  },
  {
    kind: "dropdown",
    label: "Weitere Angebote",
    icon: MdLocalOffer,
    items: [
      { label: "Bach-Blütentherapie", href: "/weitere/bach-bluetentherapie" },
      {
        label: "Fußreflexzonenmassage",
        href: "/weitere/fussreflexzonenmassage",
      },
      { label: "Schröpfen", href: "/weitere/schroepfen" },
    ],
  },
];
