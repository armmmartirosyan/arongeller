import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { portrait1, portrait2 } from "@images";

export * from "./architecture";

export const COUNTER_INFORMATION = [
  { count: 380, name: "Hoisting Cranes" },
  { count: 45, name: "Construction projects put into operation" },
  { count: 62, name: "Tropicall Villas" },
  { count: 51, name: "Pools" },
  { count: 15, name: "Years of construction  in Indonesia" },
  { count: 3, name: "Awards" },
  { count: 4, name: "Tower Cranes" },
  { count: 2, name: "Hotels" },
  { count: 45, name: "Transactions With Real Estate" },
];

export const MENU = [
  { link: "#", text: "Home", onClick: () => {}, scroll: true },
  { link: "#", text: "Portfolio", onClick: () => {}, scroll: true },
  {
    link: "",
    text: "Architecture",
    onClick: (setterFunc) => {
      setterFunc(true);
    },
    scroll: false,
  },
  { link: "#", text: "Reviews", onClick: () => {}, scroll: true },
  { link: "#", text: "Contact", onClick: () => {}, scroll: true },
];

export const CONTACT_LINKS = [
  { name: "Facebook", icon: faFacebookF, href: "#" },
  { name: "Instagram", icon: faInstagram, href: "#" },
  { name: "YouTube", icon: faYoutube, href: "#" },
  { name: "Gmail", icon: faEnvelope, href: "#" },
];

export const QUOTES = [
  {
    id: 1,
    image: portrait1,
    text: "Work hard in silence, let your success be the noise.",
  },
  {
    id: 2,
    image: portrait2,
    text: "Quality is never an accident. It is always the result of intelligent effort.",
  },
];

export const HIDDEN_PAGE_CLASS = "hidden";
