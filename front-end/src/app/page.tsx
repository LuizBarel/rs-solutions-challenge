import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import { AppSidebar } from '@/src/components/layouts/app-sidebar';

export default function Dashboard() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="bg-gray-50 w-full">
                    <SidebarTrigger />
                </main>
            </SidebarProvider>
        </>
    );
}
