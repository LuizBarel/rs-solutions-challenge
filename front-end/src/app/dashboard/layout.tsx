import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layouts/app-sidebar';
import { Header } from '@/components/layouts/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <Header />

            <main className="flex flex-col lg:gap-12 gap-8 w-full sm:mt-[100px] mt-[70px] lg:p-8 md:p-6 p-3 bg-gray-50 md:border-t md:border-l md:border-gray-600 md:rounded-tl-lg">
                {children}
            </main>
        </SidebarProvider>
    );
}
