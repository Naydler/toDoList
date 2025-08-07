import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
    return (
        <div className="grid gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Resumen de Actividad</CardTitle>
                </CardHeader>
                <CardContent>
                    Aquí irá el resumen de tus proyectos, tareas o calendario.
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                    Aquí irán los mensajes o eventos recientes.
                </CardContent>
            </Card>
        </div>
    )
}
