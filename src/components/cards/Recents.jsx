import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const recentItems = [
    { id: 1, task: "Diseñar pantalla de login", project: "App Móvil", status: "in-progress" },
    { id: 2, task: "Corregir bug en checkout", project: "E-commerce", status: "completed" },
    { id: 3, task: "Actualizar documentación", project: "Wiki Interna", status: "completed" },
    { id: 4, task: "Revisar contrato", project: "Cliente A", status: "blocked" },
    { id: 5, task: "Planificar sprint", project: "Scrum Team", status: "in-progress" },
    { id: 6, task: "Subir release v2.1", project: "API Backend", status: "completed" },
    { id: 7, task: "Reunión con marketing", project: "Campaña Q4", status: "in-progress" }
]

const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-yellow-500",
    blocked: "bg-red-500",
}

export function RecentCard() {
    return (
        <Card className="w-full bg-white border border-gray-100">
            <CardHeader>
                <CardTitle>Recientes</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-1">
                    {recentItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`/tarea/${item.id}`}
                                className="flex items-center text-sm text-gray-700 hover:bg-gray-50 rounded px-2 py-1 transition"
                            >
                                <span
                                    className={`w-2.5 h-2.5 rounded-full mr-2 ${statusColors[item.status]}`}
                                ></span>
                                <span className="font-medium">{item.task}</span>
                                <span className="ml-1 text-gray-500">— {item.project}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
