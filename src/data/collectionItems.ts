import {
  BangleIcon,
  RingIcon,
  NecklaceIcon,
  BridalSetIcon,
  EarringIcon,
  ChainIcon,
  PendantIcon,
  AnkletIcon,
  CoinIcon,
  TempleIcon,
} from "@/components/JewelleryIcons";

export const categories = ["All", "Gold", "Silver", "Diamond", "Bridal"] as const;
export type Category = (typeof categories)[number];
export type SubCategory = Exclude<Category, "All">;

export const items: {
  icon: typeof BangleIcon;
  title: string;
  category: SubCategory;
  desc: string;
}[] = [
  {
    icon: BangleIcon,
    title: "Gold Bangles",
    category: "Gold",
    desc: "Hallmarked kadas and bangles, plain or stone-studded.",
  },
  {
    icon: ChainIcon,
    title: "Gold Chains",
    category: "Gold",
    desc: "Everyday and festive chains in classic and modern links.",
  },
  {
    icon: EarringIcon,
    title: "Gold Earrings",
    category: "Gold",
    desc: "Jhumkas, studs and chandbalis for daily wear to festive.",
  },
  {
    icon: CoinIcon,
    title: "Gold Coins",
    category: "Gold",
    desc: "Hallmarked coins for gifting and auspicious occasions.",
  },
  {
    icon: AnkletIcon,
    title: "Silver Anklets",
    category: "Silver",
    desc: "Payal and anklets in traditional ghungroo styles.",
  },
  {
    icon: NecklaceIcon,
    title: "Silver Necklaces",
    category: "Silver",
    desc: "Silver necklaces and chains, priced by the day's rate.",
  },
  {
    icon: CoinIcon,
    title: "Silver Gifting",
    category: "Silver",
    desc: "Silver coins and gift items for pujas and celebrations.",
  },
  {
    icon: RingIcon,
    title: "Diamond Rings",
    category: "Diamond",
    desc: "Certified diamond rings for engagements and everyday sparkle.",
  },
  {
    icon: PendantIcon,
    title: "Diamond Pendants",
    category: "Diamond",
    desc: "Solitaire and cluster pendants on fine gold chains.",
  },
  {
    icon: EarringIcon,
    title: "Diamond Earrings",
    category: "Diamond",
    desc: "Diamond studs and drops, certified for purity and cut.",
  },
  {
    icon: BridalSetIcon,
    title: "Bridal Necklace Sets",
    category: "Bridal",
    desc: "Complete sets — necklace, maang tikka and earrings, made to match.",
  },
  {
    icon: TempleIcon,
    title: "Temple Jewellery",
    category: "Bridal",
    desc: "Temple-style chokers and sets for weddings and functions.",
  },
  {
    icon: EarringIcon,
    title: "Maang Tikka & Earrings",
    category: "Bridal",
    desc: "Matching earring and maang tikka sets for the bridal look.",
  },
];

export const categoryTint: Record<SubCategory, string> = {
  Gold: "from-[#b08d3e]/[0.09]",
  Silver: "from-slate-400/[0.09]",
  Diamond: "from-sky-200/[0.15]",
  Bridal: "from-[#6e1423]/[0.08]",
};

// Representative category photography — Pexels, free for commercial use,
// no attribution required. One image per broad category, applied across
// its items. Swap for real Shri Raj Jewellers product shots whenever
// they're available (see README).
export const categoryImage: Record<SubCategory, string> = {
  Gold: "https://images.pexels.com/photos/37485307/pexels-photo-37485307.jpeg?auto=compress&cs=tinysrgb&w=800",
  Silver:
    "https://images.pexels.com/photos/5475580/pexels-photo-5475580.jpeg?auto=compress&cs=tinysrgb&w=800",
  Diamond:
    "https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=800",
  Bridal:
    "https://images.pexels.com/photos/13595793/pexels-photo-13595793.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export const categorySubtitle: Record<SubCategory, string> = {
  Gold: "22K & 18K Hallmarked Gold",
  Silver: "Certified Silver",
  Diamond: "Certified & Hallmarked",
  Bridal: "For Weddings & Functions",
};
