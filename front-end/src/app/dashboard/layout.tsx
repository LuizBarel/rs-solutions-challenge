// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import { AppSidebar } from '@/src/components/layouts/app-sidebar';

import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <header className="w-full h-[100px] fixed flex md:justify-end justify-between bg-white p-8">
                <SidebarTrigger className="flex md:hidden" />

                <div className="flex items-center gap-[2px] select-none">
                    <HiOutlineUserCircle size={32} />
                    <p className="text-md text-gray-900">Usuário</p>
                </div>
            </header>

            <main className="w-full mt-[100px] p-8 bg-gray-50 border-t md:border-l border-gray-600 md:rounded-tl-lg">
                {children}
            </main>
        </SidebarProvider>
    );
}
