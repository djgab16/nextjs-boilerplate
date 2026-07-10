"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { tutorials, type Tutorial } from "@/lib/data/tutorials";
import { TutorialCard } from "./tutorial-card";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"] as const;

function TutorialGrid({ items }: { items: Tutorial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((tutorial, index) => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} index={index} />
      ))}
    </div>
  );
}

export function TutorialsContent() {
  const beginnerTutorials = tutorials.filter(
    (t) => t.difficulty === "Beginner"
  );
  const intermediateTutorials = tutorials.filter(
    (t) => t.difficulty === "Intermediate"
  );
  const advancedTutorials = tutorials.filter(
    (t) => t.difficulty === "Advanced"
  );

  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="mb-8 flex flex-wrap h-auto gap-1">
        {difficulties.map((diff) => (
          <TabsTrigger key={diff} value={diff}>
            {diff}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="All">
        <TutorialGrid items={tutorials} />
      </TabsContent>
      <TabsContent value="Beginner">
        <TutorialGrid items={beginnerTutorials} />
      </TabsContent>
      <TabsContent value="Intermediate">
        <TutorialGrid items={intermediateTutorials} />
      </TabsContent>
      <TabsContent value="Advanced">
        <TutorialGrid items={advancedTutorials} />
      </TabsContent>
    </Tabs>
  );
}
