/* eslint-disable react/no-unescaped-entities */
import { MessageCircle } from "lucide-react"
import { Header } from "../Header"
import { Video } from "../Video"
import { Module } from "../Module"

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
          <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zing-900 overflow-y-scroll">
           <Module moduleIndex={0} title="Desvendando o Redux" amountOfLessons="12 aulas"/>
           <Module moduleIndex={1} title="Desvendando o Redux" amountOfLessons="12 aulas"/>
           <Module moduleIndex={2} title="Desvendando o Redux" amountOfLessons="12 aulas"/>
          </aside>
          </main> 
      </div>
    </div>
  )
}