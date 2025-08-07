import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bell, Home } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-gray-100 p-4">
            <h1 className="text-xl font-bold mb-4">Mi ClickUp</h1>
            <nav className="space-y-2">
                <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                </a>
                <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 rounded px-2 py-1">
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                </a>
                <div className="w-full h-px bg-gray-200 my-4" />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="spaces">
                        <AccordionTrigger className="text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">
                            Spaces
                        </AccordionTrigger>
                        <AccordionContent className="ml-4 space-y-1">
                            <a href="#" className="block text-sm text-gray-600 hover:underline">Team Space</a>
                            <a href="#" className="block text-sm text-gray-600 hover:underline">Personal Space</a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="w-full h-px bg-gray-200 my-2" />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="spaces">
                        <AccordionTrigger className="text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">
                            Dashboards
                        </AccordionTrigger>
                        <AccordionContent className="ml-4 space-y-1">
                            <a href="#" className="block text-sm text-gray-600 hover:underline">Team Space</a>
                            <a href="#" className="block text-sm text-gray-600 hover:underline">Personal Space</a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </nav>
        </aside>
    );
}
