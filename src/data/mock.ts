export const mockData = {
  // Platform performance over time
  platformTrends: [
    { date: "2024-01", Steam: 45000, PlayStation: 32000, Xbox: 28000 },
    { date: "2024-02", Steam: 48000, PlayStation: 35000, Xbox: 30000 },
    { date: "2024-03", Steam: 52000, PlayStation: 38000, Xbox: 32000 },
    { date: "2024-04", Steam: 49000, PlayStation: 36000, Xbox: 31000 },
    { date: "2024-05", Steam: 55000, PlayStation: 41000, Xbox: 35000 },
    { date: "2024-06", Steam: 58000, PlayStation: 43000, Xbox: 37000 },
  ],

  // Top games by platform
  topGames: [
    {
      name: "Cyberpunk 2077",
      Steam: 125000,
      PlayStation: 98000,
      Xbox: 87000,
      rating: 4.2,
      revenue: 2400000,
      genre: "Action",
    },
    {
      name: "Elden Ring",
      Steam: 110000,
      PlayStation: 145000,
      Xbox: 95000,
      rating: 4.8,
      revenue: 3200000,
      genre: "RPG",
    },
    {
      name: "Call of Duty MW3",
      Steam: 95000,
      PlayStation: 156000,
      Xbox: 134000,
      rating: 4.1,
      revenue: 4100000,
      genre: "Shooter",
    },
    {
      name: "Baldurs Gate 3",
      Steam: 180000,
      PlayStation: 67000,
      Xbox: 52000,
      rating: 4.9,
      revenue: 2800000,
      genre: "RPG",
    },
    {
      name: "FIFA 24",
      Steam: 45000,
      PlayStation: 178000,
      Xbox: 142000,
      rating: 3.8,
      revenue: 3500000,
      genre: "Sports",
    },
    {
      name: "Hogwarts Legacy",
      Steam: 87000,
      PlayStation: 98000,
      Xbox: 76000,
      rating: 4.3,
      revenue: 2100000,
      genre: "Adventure",
    },
    {
      name: "Spider-Man 2",
      Steam: 0,
      PlayStation: 234000,
      Xbox: 0,
      rating: 4.7,
      revenue: 2900000,
      genre: "Action",
    },
    {
      name: "Starfield",
      Steam: 156000,
      PlayStation: 0,
      Xbox: 198000,
      rating: 4.0,
      revenue: 1800000,
      genre: "RPG",
    },
    {
      name: "Diablo IV",
      Steam: 78000,
      PlayStation: 89000,
      Xbox: 92000,
      rating: 4.2,
      revenue: 2600000,
      genre: "Action",
    },
    {
      name: "The Last of Us Part I",
      Steam: 45000,
      PlayStation: 123000,
      Xbox: 0,
      rating: 4.6,
      revenue: 1500000,
      genre: "Adventure",
    },
  ],

  // Genre performance
  genreData: [
    { genre: "Action", players: 450000, avgRating: 4.2, revenue: 12500000 },
    { genre: "RPG", players: 380000, avgRating: 4.5, revenue: 11200000 },
    { genre: "Sports", players: 320000, avgRating: 3.9, revenue: 9800000 },
    { genre: "Adventure", players: 280000, avgRating: 4.3, revenue: 8600000 },
    { genre: "Shooter", players: 420000, avgRating: 4.1, revenue: 13200000 },
    { genre: "Racing", players: 180000, avgRating: 4.0, revenue: 5400000 },
    { genre: "Strategy", players: 150000, avgRating: 4.4, revenue: 4200000 },
  ],

  // Daily active users
  dailyUsers: [
    { date: "2024-05-27", users: 1250000 },
    { date: "2024-05-28", users: 1320000 },
    { date: "2024-05-29", users: 1180000 },
    { date: "2024-05-30", users: 1420000 },
    { date: "2024-05-31", users: 1380000 },
    { date: "2024-06-01", users: 1650000 },
    { date: "2024-06-02", users: 1580000 },
  ],
};

export const platforms = [
  {
    name: "PlayStation",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    bgColor: "bg-blue-600",
    textColor: "text-blue-100",
    accentColor: "border-blue-400",
    icon: "🎮",
    stats: { users: "110M+", games: "5,000+", revenue: "$25B+" },
    features: ["Exclusive Analytics", "Trophy Tracking", "Community Insights"],
  },
  {
    name: "Xbox",
    color: "bg-gradient-to-br from-green-600 to-green-800",
    bgColor: "bg-green-600",
    textColor: "text-green-100",
    accentColor: "border-green-400",
    icon: "🎯",
    stats: { users: "120M+", games: "4,500+", revenue: "$16B+" },
    features: [
      "GamePass Analytics",
      "Achievement System",
      "Cross-Platform Data",
    ],
  },
];
