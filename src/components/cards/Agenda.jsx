"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { format, addDays, subDays } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const tasks = [
    { id: 1, task: "Reunión equipo", time: "09:00" },
    { id: 2, task: "Revisión PR #42", time: "11:00" },
    { id: 3, task: "Llamada cliente", time: "15:00" },
    { id: 4, task: "Enviar informe", time: "17:00" },
]

export function DailyTasksCard() {
    const [date, setDate] = useState(new Date())

    const previousDay = () => setDate(subDays(date, 1))
    const nextDay = () => setDate(addDays(date, 1))

    return (
        <Card className="w-full bg-white border border-gray-100">
            <CardHeader className="flex flex-col items-start border-b border-gray-100 pb-3 gap-2">
                <CardTitle className="text-lg font-semibold">
                    Agenda
                </CardTitle>
                <div className="flex items-center text-xs w-full">
                    <button
                        onClick={previousDay}
                        className="p-1 h-6 w-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded"
                    >
                        <ChevronLeft className="w-3 h-3" />
                    </button>

                    <span className="text-xs font-medium">
                        {format(date, "PPP", { locale: es })}
                    </span>

                    <button
                        onClick={nextDay}
                        className="p-1 h-6 w-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded"
                    >
                        <ChevronRight className="w-3 h-3" />
                    </button>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                size="sm"
                                className="p-1 h-6 w-6 ml-auto"
                            >
                                <CalendarIcon className="w-3 h-3 " />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            align="end"
                            className="p-2 bg-white border border-gray-200 rounded-md shadow-md"
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                locale={es}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                {tasks.length > 0 ? (
                    <ul className="space-y-2">
                        {tasks.map((t) => (
                            <li key={t.id} className="flex items-center justify-between text-sm text-gray-700 hover:bg-gray-50 rounded px-2 py-1 transition">
                                <span>{t.task}</span>
                                <span className="text-gray-500">{t.time}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">No hay tareas para este día</p>
                )}
            </CardContent>
        </Card>
    )
}
