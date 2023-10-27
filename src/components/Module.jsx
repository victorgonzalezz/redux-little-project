/* eslint-disable react/prop-types */
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

export function Module({moduleIndex, title, amountOfLessons}) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLessons}</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson
          title="Fundamentos do Redux"
          duration="09:14"
        />
        <Lesson
          title="Fundamentos do Redux"
          duration="10:32"
        />
        <Lesson
          title="Fundamentos do Redux"
          duration="03:33"
        />
       </nav>

    </div>
  )
}