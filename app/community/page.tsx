import type { Metadata } from "next";
import {
  Calendar,
  MapPin,
  Users,
  Mic2,
  Handshake,
  Heart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  events,
  speakers,
  partners,
  volunteerOpportunities,
} from "@/lib/data/community";

export const metadata: Metadata = {
  title: "Community | Kiro Hub",
  description:
    "Join the Kiro community. Attend Build Nights, workshops, and meetups. Connect with speakers, partners, and volunteer opportunities.",
};

const eventTypeColors: Record<string, string> = {
  "Build Night":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Workshop:
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Meetup:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
};

const commitmentColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function CommunityPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Community
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, learn, and build together. The Kiro community is where
            developers share knowledge, collaborate on projects, and push the
            boundaries of AI-assisted development.
          </p>
        </header>

        {/* Events Section */}
        <section className="mb-20" aria-labelledby="events-heading">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2 id="events-heading" className="text-2xl md:text-3xl font-bold">
              Upcoming Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={eventTypeColors[event.type]}>
                      {event.type}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {event.attendees}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        | {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Speakers Section */}
        <section className="mb-20" aria-labelledby="speakers-heading">
          <div className="flex items-center gap-3 mb-8">
            <Mic2 className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2 id="speakers-heading" className="text-2xl md:text-3xl font-bold">
              Featured Speakers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker) => (
              <Card key={speaker.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 mx-auto mb-3 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-2xl font-bold text-white">
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{speaker.name}</CardTitle>
                  <CardDescription>{speaker.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                    {speaker.topic}
                  </p>
                  <p className="text-xs text-muted-foreground">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-20" aria-labelledby="partners-heading">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2 id="partners-heading" className="text-2xl md:text-3xl font-bold">
              Community Partners
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 flex items-center justify-center mb-2"
                    aria-hidden="true"
                  >
                    <Handshake className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
        <section aria-labelledby="volunteer-heading">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2
              id="volunteer-heading"
              className="text-2xl md:text-3xl font-bold"
            >
              Volunteer Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerOpportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">
                      {opportunity.title}
                    </CardTitle>
                    <Badge className={commitmentColors[opportunity.commitment]}>
                      {opportunity.commitment} Commitment
                    </Badge>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {opportunity.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
