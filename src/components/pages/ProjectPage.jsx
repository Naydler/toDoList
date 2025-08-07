import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectPage() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Proyecto A</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Tareas Pendientes</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>📝 Tarea 1</span>
                            <Button variant="outline">Ver</Button>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>📝 Tarea 2</span>
                            <Button variant="outline">Ver</Button>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}
