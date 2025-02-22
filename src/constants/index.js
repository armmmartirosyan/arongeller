import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { portrait1, portrait2 } from "@images";

export * from "./architecture";
export * from "./portfolio";
export * from "./reviews";

export const COUNTER_INFORMATION = [
  { count: 380, name: "Hoisting Cranes" },
  { count: 3, name: "Awards" },
  { count: 51, name: "Pools" },
  { count: 2, name: "Hotels" },
  { count: 62, name: "Tropicall Villas" },
  { count: 4, name: "Tower Cranes" },
  { count: 15, name: "Years of construction  in Indonesia" },
  { count: 45, name: "Construction projects put into operation" },
  { count: 45, name: "Transactions With Real Estate" },
];

export const MENU = [
  { link: "/", text: "Home", onClick: () => {}, scroll: true },
  { link: "/portfolio", text: "Portfolio", onClick: () => {}, scroll: true },
  {
    link: "",
    text: "Architecture",
    onClick: (setterFunc) => {
      setterFunc(true);
    },
    scroll: false,
  },
  { link: "/reviews", text: "Reviews", onClick: () => {}, scroll: true },
  { link: "/contact", text: "Contact", onClick: () => {}, scroll: true },
];

// export const EMAIL = "arongeller@mail.com"; TODO: Uncomment this
export const EMAIL = "armmmartirosyan@mail.ru";

export const CONTACT_LINKS = [
  {
    name: "Facebook",
    icon: faFacebookF,
    href: "https://facebook.com/aron.geller",
    target: "_blank",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/engineer.arongeller",
    target: "_blank",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCnDWL_wHom3bRjuQDsQNRZQ",
    target: "_blank",
  },
  {
    name: "Gmail",
    icon: faEnvelope,
    target: undefined,
    href: `mailto:${EMAIL}`,
  },
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
