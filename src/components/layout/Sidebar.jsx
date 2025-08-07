import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu"

export function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r p-4">
            <h1 className="text-xl font-bold mb-4">Mi ClickUp</h1>
            <NavigationMenu orientation="vertical" className="space-y-2">
                <NavigationMenuItem>
                    <a href="#" className="text-sm">🏠 Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#" className="text-sm">📥 Inbox</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#" className="text-sm">📁 Proyecto A</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#" className="text-sm">📁 Proyecto B</a>
                </NavigationMenuItem>
            </NavigationMenu>
        </aside>
    )
}
