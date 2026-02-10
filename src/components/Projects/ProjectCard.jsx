import React from "react";
// Note the "../ui" path change below
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/Card";
import { Badge } from "../ui/Badge";

export function ProjectCard({ title, description, tags, link, isNew }) {
  return (
    <Card className="group flex flex-col overflow-hidden border border-slate-200 bg-white text-slate-950 p-3 transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
      <CardHeader>
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base flex-1">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded transition-colors"
                  rel="noreferrer"
                  aria-label={`Visit ${title} project`}
                >
                  {title}
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-400"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {isNew && (
              <Badge
                className="px-2 py-0.5 text-[10px] font-semibold bg-slate-900 text-slate-50 shrink-0 transition-all duration-200 hover:scale-105 dark:bg-slate-50 dark:text-slate-900"
                variant="default"
              >
                NEW
              </Badge>
            )}
          </div>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1.5 py-0.5 text-[10px] transition-all duration-200 hover:bg-slate-100 hover:scale-105 dark:hover:bg-slate-800"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
