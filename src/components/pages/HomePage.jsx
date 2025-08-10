import { DailyTasksCard } from "@/components/cards/Agenda";
import { RecentCard } from "@/components/cards/Recents";
import { Button } from "@/components/ui/button";

export function HomePage() {
    return (
        <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                <h1 className="text-2xl font-bold">Home page</h1>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
                >
                    Gestionar Cards
                </Button>
            </div>


            <div className="flex gap-4">
                <div className="flex-1">
                    <RecentCard />
                </div>
                <div className="flex-1">
                    <DailyTasksCard />
                </div>
            </div>
        </div>
    );
}