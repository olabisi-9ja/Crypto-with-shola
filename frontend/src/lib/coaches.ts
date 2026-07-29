export interface Coach {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  socials: {
    twitter: string;
    telegram?: string;
  };
}

export const coaches: Coach[] = [
  {
    id: "shola",
    name: "Shola",
    title: "Founder & Lead Mentor",
    image: "/images/new_media/imgi_24_aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzA4YTEwNDRiLTc4NjAtNGQ0Yi04OTA1LTU4ZWJkYzM2ZGZmOC8xNzE3NDkxNTQ4X0Zua1cyaVdJQUVhU1VhLmpwZWc.webp",
    bio: "Babatunde 'Shola' Olusola is a chemical engineer turned certified life coach and crypto mentor. Leveraging his life coaching background, Shola combines inspirational motivation with practical crypto trading tutorials to help you win both in the market and in life. He has built a 109K+ Telegram Community and has 394K+ X Followers, empowering young individuals to secure their future financially.",
    socials: { 
      twitter: "https://twitter.com/cryptowithshola", 
      telegram: "https://t.me/yourtelegramchannel" 
    }
  },
  {
    id: "cyros",
    name: "Cyros",
    title: "Technical Analyst & Mentor",
    image: "/images/new_media/imgi_3_aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzA4YTEwNDRiLTc4NjAtNGQ0Yi04OTA1LTU4ZWJkYzM2ZGZmOC8xNzE3NDkyMjQ4X2wzanRZSTUyNDAweDQwMC5qcGVn.webp",
    bio: "Cyros is an expert technical analyst who specializes in charting and finding the perfect entry and exit points. He breaks down complex market movements into easy-to-understand strategies for the community.",
    socials: { 
      twitter: "https://twitter.com/", 
      telegram: "https://t.me/" 
    }
  },
  {
    id: "ebuka",
    name: "Ebuka",
    title: "DeFi & Altcoin Specialist",
    image: "/images/new_media/imgi_4_aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzA4YTEwNDRiLTc4NjAtNGQ0Yi04OTA1LTU4ZWJkYzM2ZGZmOC8xNzE3NDkyMjcwX3BYUTY4U09WNDAweDQwMC5qcGVn.webp",
    bio: "Ebuka is our resident DeFi and Altcoin specialist. He scours the on-chain data to find hidden gems before they explode, providing members with early access and insights into the fast-moving world of decentralized finance.",
    socials: { 
      twitter: "https://twitter.com/", 
      telegram: "https://t.me/" 
    }
  }
];
