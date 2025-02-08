// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layouts/app-sidebar';

import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function Layout({ children }: { children: React.ReactNode }) {
    // Estado para controlar o scroll da página
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SidebarProvider>
            <AppSidebar />

            <header
                className={cn(
                    'w-full h-[100px] fixed flex md:justify-end justify-between bg-white p-8',
                    isScrolled ? 'border-b border-b-gray-600' : '',
                )}
            >
                <SidebarTrigger className="flex md:hidden" />

                <div className="flex items-center gap-[2px] select-none">
                    <HiOutlineUserCircle size={32} />
                    <p className="text-md text-gray-900">Usuário</p>
                </div>
            </header>

            <main className="flex flex-col gap-12 w-full mt-[100px] p-8 bg-gray-50 border-t md:border-l border-gray-600 md:rounded-tl-lg">
                {children}
            </main>
        </SidebarProvider>
    );
}
