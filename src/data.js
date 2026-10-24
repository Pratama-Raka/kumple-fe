import catanBox from "./assets/catan-box.jpg";
import ticketToRideBox from "./assets/ticket-to-ride-box.jpg";
import codenamesBox from "./assets/codenames-box.jpg";
import sushiGoBox from "./assets/sushi-go-box.png";
import monopolyDealBox from "./assets/monopoly-deal-box.jpg";

export const games = [
  {
    id: "catan",
    name: "Catan",
    minPlayers: 3,
    maxPlayers: 4,
    duration: "60-90 menit",
    category: "Strategy",
    image: catanBox,
    caption: "Catan - edisi dasar",
    description:
      "Bangun pemukiman, kumpulkan sumber daya, dan jadi penguasa pulau Catan. Salah satu game strategi populer untuk pemula maupun pemain berpengalaman.",
    difficulty: "Menengah",
    communityRating: "4.3 / 5",
    reviews: [
      {
        text: "Game gateway terbaik buat yang baru mulai main boardgame strategi.",
        author: "Rangga, Bandung",
      },
      {
        text: "Selalu jadi pilihan pertama kalau lagi kumpul rame-rame.",
        author: "Sinta, Bandung",
      },
    ],
  },
  {
    id: "ticket-to-ride",
    name: "Ticket to Ride",
    minPlayers: 2,
    maxPlayers: 5,
    duration: "45-60 menit",
    category: "Strategy",
    image: ticketToRideBox,
    caption: "Ticket to Ride",
    description:
      "Bangun jalur kereta antarkota, kumpulkan kartu, dan selesaikan rute sebelum pemain lain.",
    difficulty: "Mudah",
    communityRating: "Belum ada rating",
    reviews: [],
  },
  {
    id: "codenames",
    name: "Codenames",
    minPlayers: 4,
    maxPlayers: 8,
    duration: "15-30 menit",
    category: "Party",
    image: codenamesBox,
    caption: "Codenames",
    description:
      "Beri petunjuk satu kata agar tim menemukan agen mereka tanpa memilih kata lawan.",
    difficulty: "Mudah",
    communityRating: "Belum ada rating",
    reviews: [],
  },
  {
    id: "sushi-go",
    name: "Sushi Go!",
    minPlayers: 2,
    maxPlayers: 5,
    duration: "15 menit",
    category: "Family",
    image: sushiGoBox,
    caption: "Sushi Go!",
    description:
      "Pilih kartu sushi, teruskan sisanya, dan kumpulkan kombinasi hidangan dengan skor tertinggi.",
    difficulty: "Mudah",
    communityRating: "Belum ada rating",
    reviews: [],
  },
  {
    id: "monopoly-deal",
    name: "Monopoly Deal",
    minPlayers: 2,
    maxPlayers: 5,
    duration: "15-30 menit",
    category: "Family",
    image: monopolyDealBox,
    caption: "Monopoly Deal",
    description:
      "Kumpulkan set properti dan gunakan kartu aksi untuk mengejar kemenangan dalam permainan kartu yang cepat.",
    difficulty: "Mudah",
    communityRating: "Belum ada rating",
    reviews: [],
  },
];

export const seedEvents = [
  {
    id: "strategy-night",
    title: "Malam Strategi: Catan & Ticket to Ride",
    description:
      "Yuk kumpul santai main dua game strategi klasik. Cocok buat yang udah pernah main maupun yang baru mau coba, bakal ada yang bantu jelasin aturan main di awal.",
    venue: "kopi-session",
    venueName: "Kopi Session, Dago",
    date: "2026-10-24",
    time: "19:00",
    capacity: 8,
    filled: 4,
    games: ["Catan", "Ticket to Ride"],
    participants: ["Rangga P. (Host)", "Sinta W.", "Fajar A.", "Dewi K."],
  },
  {
    id: "party-game-intro",
    title: "Party Game Santai untuk Pemula",
    description:
      "Sesi ringan untuk kenalan dengan game party. Datang sendiri juga boleh, aturan akan dijelaskan sebelum mulai.",
    venue: "board-brew",
    venueName: "Board & Brew, Buah Batu",
    date: "2026-10-31",
    time: "18:30",
    capacity: 10,
    filled: 4,
    games: ["Codenames", "Sushi Go!"],
    participants: ["Nadia R. (Host)", "Arif S.", "Mira T.", "Bimo K."],
  },
  {
    id: "codenames-marathon",
    title: "Marathon Codenames",
    description:
      "Main beberapa ronde Codenames bersama komunitas. Acara ini sudah penuh.",
    venue: "kopi-session",
    venueName: "Kopi Session, Dago",
    date: "2026-11-07",
    time: "16:00",
    capacity: 12,
    filled: 12,
    games: ["Codenames"],
    participants: ["Komunitas Kumple"],
  },
];
