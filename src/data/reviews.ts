/* Customer review data — update this file to add or edit reviews */
export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    name: "James R.",
    rating: 5,
    date: "2024-11-02",
    text: "Great service. Price was exactly what was quoted — no surprises. Ken Baldino's team knew exactly what was wrong and had it fixed fast. Won't take my truck anywhere else.",
    avatar: "JR",
  },
  {
    name: "Maria C.",
    rating: 5,
    date: "2024-09-14",
    text: "The owner and staff have been there forever and really know their stuff. I've been bringing my cars here for years. Honest shop — they tell you what you actually need.",
    avatar: "MC",
  },
  {
    name: "Tom S.",
    rating: 5,
    date: "2024-08-28",
    text: "Great work, great pricing, and great communication. They kept me updated the whole time and the transmission has been running perfect since.",
    avatar: "TS",
  },
  {
    name: "Denise W.",
    rating: 5,
    date: "2024-07-10",
    text: "Brought in my Jeep with a transmission issue I'd been putting off. They diagnosed it same day and gave me a fair answer on what it would cost. Done in two days. Really glad I found this place.",
    avatar: "DW",
  },
  {
    name: "Anthony B.",
    rating: 4,
    date: "2024-06-03",
    text: "Solid shop. Been in business forever for a reason. Professional, knowledgeable, and they don't try to oversell you. Will be back.",
    avatar: "AB",
  },
  {
    name: "Lisa M.",
    rating: 5,
    date: "2024-05-19",
    text: "They rebuilt my transmission completely and it drives better than before the problem started. Full warranty gave me real peace of mind.",
    avatar: "LM",
  },
];
