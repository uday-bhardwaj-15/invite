export const invite = {
  bride: {
    name: "Zara",
    parents: "Daughter of Mr. & Mrs. Pathan",
    education: "B.Tech, MBA",
    title: "Advocate, High Court",
  },
  groom: {
    name: "Veer",
    parents: "Son of Mr. & Mrs. Khan",
    education: "M.Tech, Phd",
    title: "Software Engineer",
  },
  welcome:
    "We are honored to welcome you to the Wedding ceremony of Veer & Zara as they begin their journey together in faith and love, we thank you for being part of this blessed occasion",
  weddingDate: "2026-06-30T10:30:00+05:30",
  dateLabel: "June 30, 2026",
  dayLabel: "Wednesday",
  timeline: [
    {
      title: "Guest Arrival",
      when: "Jun 30, 2026, 10:00 AM",
      note: "We warmly welcome you..!",
    },
    {
      title: "Wedding Ceremony",
      when: "Jun 30, 2026, 10:30 AM",
      note: "Your gracious presence is requested \u2764",
    },
    {
      title: "Reception",
      when: "Jul 2, 2026, 7:30 PM",
      note: "Your gracious presence is requested at the Reception at 7:30 PM onwards.",
    },
  ],
  venue: {
    name: "The Taj Mahal Palace",
    address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Colaba+Mumbai",
  },
  closing: "With love and gratitude, we await your blessings.",
};

export type Invite = typeof invite;
