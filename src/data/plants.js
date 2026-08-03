// Self-contained SVG thumbnail generator (no external image hosting needed).
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

const pot = "#B5653F";
const potDark = "#8C4A2C";
const potAlt = "#7A6A53";
const potAltDark = "#5C4E3B";

export const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: potSVG({ leaf: "#2F6B3A", leaf2: "#3E8B4A", pot, potDark, shape: "spiky" }),
        description: "A hardy upright plant that filters indoor air even in low light.",
        cost: "$24.99",
      },
      {
        name: "Peace Lily",
        image: potSVG({ leaf: "#356B45", leaf2: "#4A8759", pot: potAlt, potDark: potAltDark, shape: "fan" }),
        description: "Glossy leaves and white blooms that thrive in shaded corners.",
        cost: "$29.99",
      },
      {
        name: "Areca Palm",
        image: potSVG({ leaf: "#2E6E4C", leaf2: "#3E8A63", pot, potDark, shape: "fan" }),
        description: "Feathery fronds that bring a breezy, tropical feel indoors.",
        cost: "$34.99",
      },
      {
        name: "Boston Fern",
        image: potSVG({ leaf: "#3B7A4A", leaf2: "#57975F", pot: potAlt, potDark: potAltDark, shape: "trail" }),
        description: "Lush, arching fronds that love a humid bathroom shelf.",
        cost: "$19.99",
      },
      {
        name: "Rubber Plant",
        image: potSVG({ leaf: "#28563A", leaf2: "#376E48", pot, potDark, shape: "round" }),
        description: "Broad, deep-green leaves with a bold, architectural shape.",
        cost: "$27.99",
      },
      {
        name: "Spider Plant",
        image: potSVG({ leaf: "#4C8B4F", leaf2: "#6AA766", pot: potAlt, potDark: potAltDark, shape: "trail" }),
        description: "Fast-growing and forgiving, with cascading striped leaves.",
        cost: "$17.99",
      },
    ],
  },
  {
    category: "Aromatic Plants",
    plants: [
      {
        name: "Lavender",
        image: potSVG({ leaf: "#7E6BA6", leaf2: "#9A85C2", pot, potDark, shape: "small" }),
        description: "Silvery leaves and purple spikes with a calming scent.",
        cost: "$21.99",
      },
      {
        name: "Jasmine",
        image: potSVG({ leaf: "#3A7047", leaf2: "#4F8C5C", pot: potAlt, potDark: potAltDark, shape: "trail" }),
        description: "Delicate white flowers with an unmistakable sweet fragrance.",
        cost: "$25.99",
      },
      {
        name: "Rosemary",
        image: potSVG({ leaf: "#3F6B4E", leaf2: "#568865", pot, potDark, shape: "spiky" }),
        description: "Needle-like leaves with a sharp, woody, kitchen-ready scent.",
        cost: "$15.99",
      },
      {
        name: "Mint",
        image: potSVG({ leaf: "#4A9155", leaf2: "#66AD70", pot: potAlt, potDark: potAltDark, shape: "round" }),
        description: "Bright, fast-spreading leaves with a crisp, cool aroma.",
        cost: "$12.99",
      },
      {
        name: "Eucalyptus",
        image: potSVG({ leaf: "#6E9E93", leaf2: "#89B6AC", pot, potDark, shape: "round" }),
        description: "Silvery-blue rounded leaves with a fresh, medicinal scent.",
        cost: "$22.99",
      },
      {
        name: "Basil",
        image: potSVG({ leaf: "#4C8B4F", leaf2: "#6BA76F", pot: potAlt, potDark: potAltDark, shape: "small" }),
        description: "Tender bright-green leaves, sweet and peppery in the air.",
        cost: "$11.99",
      },
    ],
  },
  {
    category: "Succulents",
    plants: [
      {
        name: "Echeveria",
        image: potSVG({ leaf: "#7FA88E", leaf2: "#9CC0A9", pot, potDark, shape: "small" }),
        description: "A tidy rosette of pale blue-green leaves, easy to love.",
        cost: "$14.99",
      },
      {
        name: "Jade Plant",
        image: potSVG({ leaf: "#4F8F5E", leaf2: "#6BAA79", pot: potAlt, potDark: potAltDark, shape: "round" }),
        description: "Thick, glossy leaves on sturdy stems said to bring luck.",
        cost: "$18.99",
      },
      {
        name: "Aloe Vera",
        image: potSVG({ leaf: "#5B9E6C", leaf2: "#78B888", pot, potDark, shape: "spiky" }),
        description: "Serrated, upright leaves with soothing gel inside.",
        cost: "$16.99",
      },
      {
        name: "Haworthia",
        image: potSVG({ leaf: "#3E7A56", leaf2: "#569372", pot: potAlt, potDark: potAltDark, shape: "small" }),
        description: "Small, striped, zebra-like leaves perfect for tight spaces.",
        cost: "$13.99",
      },
      {
        name: "Barrel Cactus",
        image: potSVG({ leaf: "#5E8F5A", leaf2: "#79A876", pot, potDark, shape: "round" }),
        description: "A round, ribbed silhouette that needs almost no attention.",
        cost: "$20.99",
      },
      {
        name: "String of Pearls",
        image: potSVG({ leaf: "#579069", leaf2: "#71AB82", pot: potAlt, potDark: potAltDark, shape: "trail" }),
        description: "Bead-like trailing leaves that spill over the pot's edge.",
        cost: "$19.99",
      },
    ],
  },
];
