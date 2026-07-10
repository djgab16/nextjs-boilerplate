"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Tutorial } from "@/lib/data/tutorials";

const difficultyColors: Record<Tutorial["difficulty"], string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

interface TutorialCardProps {
  tutorial: Tutorial;
  index: number;
}

export function TutorialCard({ tutorial, index }: TutorialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge
              className={difficultyColors[tutorial.difficulty]}
              aria-label={`Difficulty: ${tutorial.difficulty}`}
            >
              {tutorial.difficulty}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{tutorial.estimatedTime}</span>
            </span>
          </div>
          <CardTitle className="text-lg">{tutorial.title}</CardTitle>
          <CardDescription>{tutorial.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {tutorial.topics.map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{tutorial.progress}%</span>
            </div>
            <div
              className="h-2 w-full rounded-full bg-muted overflow-hidden"
              role="progressbar"
              aria-valuenow={tutorial.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Tutorial progress: ${tutorial.progress}%`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${tutorial.progress}%` }}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
