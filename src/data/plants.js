// Generates a simple, unique potted-plant SVG thumbnail as a data URI.
// This keeps the project fully self-contained (no external image hosting needed).
function potSVG({ leaf, leaf2, pot, potDark, shape }) {
  const leaves = {
    round: `
      <ellipse cx="100" cy="95" rx="34" ry="46" fill="${leaf}" transform="rotate(-18 100 95)"/>
      <ellipse cx="140" cy="100" rx="30" ry="42" fill="${leaf2}" transform="rotate(20 140 100)"/>
      <ellipse cx="120" cy="70" rx="26" ry="38" fill="${leaf}" transform="rotate(2 120 70)"/>
    `,
    spiky: `
      <path d="M120 150 L108 60 L120 95 L128 55 L124 100 L142 65 L130 105 L155 85 L136 115 Z" fill="${leaf}"/>
      <path d="M120 150 L96 80 L112 108 L84 70 L108 118 L70 95 L104 128 Z" fill="${leaf2}"/>
    `,
    fan: `
      <path d="M120 150 C 90 120, 80 80, 60 50 C 95 65, 110 100, 120 150 Z" fill="${leaf}"/>
      <path d="M120 150 C 130 110, 150 75, 180 50 C 150 70, 132 105, 120 150 Z" fill="${leaf2}"/>
      <path d="M120 150 C 118 100, 120 60, 120 30 C 128 65, 126 105, 120 150 Z" fill="${leaf}"/>
    `,
    trail: `
      <path d="M120 150 Q 60 120 50 70 Q 90 90 100 130 Z" fill="${leaf}"/>
      <path d="M120 150 Q 180 120 190 70 Q 150 90 140 130 Z" fill="${leaf2}"/>
      <path d="M120 150 Q 100 100 90 50 Q 120 80 120 150 Z" fill="${leaf}"/>
    `,
    small: `
      <circle cx="100" cy="90" r="26" fill="${leaf}"/>
      <circle cx="130" cy="80" r="24" fill="${leaf2}"/>
      <circle cx="118" cy="115" r="22" fill="${leaf}"/>
    `,
  };
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 220" width="240" height="220">
  <rect width="240" height="220" fill="#F4F6F0"/>
  ${leaves[shape]}
  <path d="M85 150 L155 150 L145 205 L95 205 Z" fill="${pot}"/>
  <path d="M85 150 L155 150 L151 165 L89 165 Z" fill="${potDark}"/>
</svg>`)}`;
}

const categories = [
  {
    id: "air-purifying",
    name: "Air Purifying Plants",
    blurb: "Plants that quietly filter your air while they grow.",
  },
  {
    id: "aromatic",
    name: "Aromatic Plants",
    blurb: "Fragrant greenery that fills a room without a single candle.",
  },
  {
    id: "succulents",
    name: "Succulents",
    blurb: "Low-maintenance shapes for windowsills and desks.",
  },
];

const palette = {
  pot: "#B5653F",
  potDark: "#8C4A2C",
  potAlt: "#7A6A53",
  potAltDark: "#5C4E3B",
};

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    category: "air-purifying",
    price: 24.99,
    description:
      "A hardy upright plant known for filtering indoor air even in low light.",
    image: potSVG({ leaf: "#2F6B3A", leaf2: "#3E8B4A", pot: palette.pot, potDark: palette.potDark, shape: "spiky" }),
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "air-purifying",
    price: 29.99,
    description: "Glossy leaves and white blooms that thrive in shaded corners.",
    image: potSVG({ leaf: "#356B45", leaf2: "#4A8759", pot: palette.potAlt, potDark: palette.potAltDark, shape: "fan" }),
  },
  {
    id: 3,
    name: "Areca Palm",
    category: "air-purifying",
    price: 34.99,
    description: "Feathery fronds that bring a breezy, tropical feel indoors.",
    image: potSVG({ leaf: "#2E6E4C", leaf2: "#3E8A63", pot: palette.pot, potDark: palette.potDark, shape: "fan" }),
  },
  {
    id: 4,
    name: "Boston Fern",
    category: "air-purifying",
    price: 19.99,
    description: "Lush, arching fronds that love a humid bathroom shelf.",
    image: potSVG({ leaf: "#3B7A4A", leaf2: "#57975F", pot: palette.potAlt, potDark: palette.potAltDark, shape: "trail" }),
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "air-purifying",
    price: 27.99,
    description: "Broad, deep-green leaves with a bold, architectural shape.",
    image: potSVG({ leaf: "#28563A", leaf2: "#376E48", pot: palette.pot, potDark: palette.potDark, shape: "round" }),
  },
  {
    id: 6,
    name: "Spider Plant",
    category: "air-purifying",
    price: 17.99,
    description: "Fast-growing and forgiving, with cascading striped leaves.",
    image: potSVG({ leaf: "#4C8B4F", leaf2: "#6AA766", pot: palette.potAlt, potDark: palette.potAltDark, shape: "trail" }),
  },

  // Aromatic Plants
  {
    id: 7,
    name: "Lavender",
    category: "aromatic",
    price: 21.99,
    description: "Silvery leaves and purple spikes with a calming scent.",
    image: potSVG({ leaf: "#7E6BA6", leaf2: "#9A85C2", pot: palette.pot, potDark: palette.potDark, shape: "small" }),
  },
  {
    id: 8,
    name: "Jasmine",
    category: "aromatic",
    price: 25.99,
    description: "Delicate white flowers with an unmistakable sweet fragrance.",
    image: potSVG({ leaf: "#3A7047", leaf2: "#4F8C5C", pot: palette.potAlt, potDark: palette.potAltDark, shape: "trail" }),
  },
  {
    id: 9,
    name: "Rosemary",
    category: "aromatic",
    price: 15.99,
    description: "Needle-like leaves with a sharp, woody, kitchen-ready scent.",
    image: potSVG({ leaf: "#3F6B4E", leaf2: "#568865", pot: palette.pot, potDark: palette.potDark, shape: "spiky" }),
  },
  {
    id: 10,
    name: "Mint",
    category: "aromatic",
    price: 12.99,
    description: "Bright, fast-spreading leaves with a crisp, cool aroma.",
    image: potSVG({ leaf: "#4A9155", leaf2: "#66AD70", pot: palette.potAlt, potDark: palette.potAltDark, shape: "round" }),
  },
  {
    id: 11,
    name: "Eucalyptus",
    category: "aromatic",
    price: 22.99,
    description: "Silvery-blue rounded leaves with a fresh, medicinal scent.",
    image: potSVG({ leaf: "#6E9E93", leaf2: "#89B6AC", pot: palette.pot, potDark: palette.potDark, shape: "round" }),
  },
  {
    id: 12,
    name: "Basil",
    category: "aromatic",
    price: 11.99,
    description: "Tender bright-green leaves, sweet and peppery in the air.",
    image: potSVG({ leaf: "#4C8B4F", leaf2: "#6BA76F", pot: palette.potAlt, potDark: palette.potAltDark, shape: "small" }),
  },

  // Succulents
  {
    id: 13,
    name: "Echeveria",
    category: "succulents",
    price: 14.99,
    description: "A tidy rosette of pale blue-green leaves, easy to love.",
    image: potSVG({ leaf: "#7FA88E", leaf2: "#9CC0A9", pot: palette.pot, potDark: palette.potDark, shape: "small" }),
  },
  {
    id: 14,
    name: "Jade Plant",
    category: "succulents",
    price: 18.99,
    description: "Thick, glossy leaves on sturdy stems said to bring luck.",
    image: potSVG({ leaf: "#4F8F5E", leaf2: "#6BAA79", pot: palette.potAlt, potDark: palette.potAltDark, shape: "round" }),
  },
  {
    id: 15,
    name: "Aloe Vera",
    category: "succulents",
    price: 16.99,
    description: "Serrated, upright leaves with soothing gel inside.",
    image: potSVG({ leaf: "#5B9E6C", leaf2: "#78B888", pot: palette.pot, potDark: palette.potDark, shape: "spiky" }),
  },
  {
    id: 16,
    name: "Haworthia",
    category: "succulents",
    price: 13.99,
    description: "Small, striped, zebra-like leaves perfect for tight spaces.",
    image: potSVG({ leaf: "#3E7A56", leaf2: "#569372", pot: palette.potAlt, potDark: palette.potAltDark, shape: "small" }),
  },
  {
    id: 17,
    name: "Barrel Cactus",
    category: "succulents",
    price: 20.99,
    description: "A round, ribbed silhouette that needs almost no attention.",
    image: potSVG({ leaf: "#5E8F5A", leaf2: "#79A876", pot: palette.pot, potDark: palette.potDark, shape: "round" }),
  },
  {
    id: 18,
    name: "String of Pearls",
    category: "succulents",
    price: 19.99,
    description: "Bead-like trailing leaves that spill over the pot's edge.",
    image: potSVG({ leaf: "#579069", leaf2: "#71AB82", pot: palette.potAlt, potDark: palette.potAltDark, shape: "trail" }),
  },
];

export { categories, plants };
