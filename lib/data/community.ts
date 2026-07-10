export interface CommunityEvent {
  id: string;
  title: string;
  type: "Build Night" | "Workshop" | "Meetup";
  date: string;
  time: string;
  description: string;
  location: string;
  attendees: number;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  avatar: string;
  topic: string;
  bio: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  commitment: "Low" | "Medium" | "High";
  skills: string[];
}

/**
 * Helper to generate a future date string (YYYY-MM-DD) relative to today.
 * @param daysFromNow - number of days from today
 */
function getFutureDate(daysFromNow: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString().split("T")[0];
}

export const events: CommunityEvent[] = [
  {
    id: "1",
    title: "Kiro Build Night: AI-Powered Web Apps",
    type: "Build Night",
    date: getFutureDate(14),
    time: "6:00 PM - 9:00 PM EST",
    description:
      "Join us for an evening of hands-on building with Kiro. We will be creating AI-powered web applications from scratch using specification-driven development.",
    location: "Virtual (Discord)",
    attendees: 45,
  },
  {
    id: "2",
    title: "Workshop: Specification-Driven Development",
    type: "Workshop",
    date: getFutureDate(21),
    time: "2:00 PM - 5:00 PM EST",
    description:
      "Learn how to write specifications that Kiro can transform into production-ready code. Interactive session with live coding examples.",
    location: "Virtual (Zoom)",
    attendees: 120,
  },
  {
    id: "3",
    title: "Kiro Build Night: CLI Tools",
    type: "Build Night",
    date: getFutureDate(30),
    time: "6:00 PM - 9:00 PM EST",
    description:
      "Build powerful command-line tools with Kiro. From argument parsing to interactive prompts, we will explore the full CLI development workflow.",
    location: "Virtual (Discord)",
    attendees: 38,
  },
  {
    id: "4",
    title: "Workshop: GitHub Integration Mastery",
    type: "Workshop",
    date: getFutureDate(37),
    time: "1:00 PM - 4:00 PM EST",
    description:
      "Deep dive into Kiro's GitHub integration. Learn automated PR workflows, code review automation, and branch management strategies.",
    location: "Virtual (Zoom)",
    attendees: 85,
  },
  {
    id: "5",
    title: "Community Meetup: Show & Tell",
    type: "Meetup",
    date: getFutureDate(45),
    time: "5:00 PM - 7:00 PM EST",
    description:
      "Share what you have built with Kiro! Community members present their projects, share tips, and discuss best practices.",
    location: "Virtual (Discord)",
    attendees: 60,
  },
];

export const speakers: Speaker[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Developer Advocate",
    avatar: "/avatars/speaker-1.jpg",
    topic: "The Future of AI-Native IDEs",
    bio: "Sarah has been building developer tools for over a decade and is passionate about making AI accessible to all developers.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Staff Engineer at TechCorp",
    avatar: "/avatars/speaker-2.jpg",
    topic: "Scaling Kiro Across Engineering Teams",
    bio: "Marcus leads the developer productivity team and has deployed Kiro to over 200 engineers at his organization.",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Open Source Maintainer",
    avatar: "/avatars/speaker-3.jpg",
    topic: "Spec-Driven Open Source Contributions",
    bio: "Elena maintains several popular open source libraries and uses Kiro to streamline contribution workflows.",
  },
  {
    id: "4",
    name: "David Park",
    title: "Indie Developer & Creator",
    avatar: "/avatars/speaker-4.jpg",
    topic: "From Idea to Launch in 48 Hours with Kiro",
    bio: "David is a solo developer who has shipped 12 products in the last year using AI-assisted development workflows.",
  },
];

export const partners: Partner[] = [
  {
    id: "1",
    name: "DevHub Community",
    description:
      "A global network of developer communities hosting local events and workshops focused on modern development tools.",
    logo: "/logos/partner-1.svg",
    website: "https://example.com/devhub",
  },
  {
    id: "2",
    name: "Code Academy Pro",
    description:
      "Online learning platform providing structured courses and certifications for emerging technologies.",
    logo: "/logos/partner-2.svg",
    website: "https://example.com/codeacademy",
  },
  {
    id: "3",
    name: "Open Source Alliance",
    description:
      "Supporting open source projects with funding, mentorship, and community building resources.",
    logo: "/logos/partner-3.svg",
    website: "https://example.com/osa",
  },
];

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: "1",
    title: "Tutorial Content Creator",
    description:
      "Help create beginner-friendly tutorials and guides for new Kiro users. Write clear, step-by-step instructions with code examples.",
    commitment: "Medium",
    skills: ["Technical Writing", "Kiro Experience", "Teaching"],
  },
  {
    id: "2",
    title: "Community Moderator",
    description:
      "Help maintain a welcoming and productive community space. Answer questions, enforce guidelines, and facilitate discussions.",
    commitment: "High",
    skills: ["Communication", "Patience", "Community Management"],
  },
  {
    id: "3",
    title: "Event Organizer",
    description:
      "Plan and coordinate Build Nights, workshops, and meetups. Handle logistics, speaker coordination, and attendee engagement.",
    commitment: "Medium",
    skills: ["Organization", "Event Planning", "Public Speaking"],
  },
  {
    id: "4",
    title: "Open Source Contributor",
    description:
      "Contribute to Kiro's ecosystem by building plugins, integrations, and community tools. Fix bugs and add new features.",
    commitment: "Low",
    skills: ["TypeScript", "Open Source", "Problem Solving"],
  },
];
