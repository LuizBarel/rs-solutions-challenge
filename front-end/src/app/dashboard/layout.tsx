// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layouts/app-sidebar';

import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function Layout({ children }: { children: React.ReactNode }) {
    // Estado para controlar o scroll da página
    const [isScrolled, setIsScrolled] = useState(false);

    // Estado para mobile
    const isMobile = useIsMobile();

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
                    !isMobile
                        ? isScrolled
                            ? 'w-full h-[100px] fixed flex md:justify-end justify-between bg-white p-8 border-b border-b-gray-600 z-10'
                            : 'w-full h-[100px] fixed flex md:justify-end justify-between bg-white p-8'
                        : 'w-full sm:h-[100px] h-[70px] fixed flex md:justify-end justify-between items-center bg-white md:p-8 p-3 border-b border-b-gray-600 z-10',
                )}
            >
                <SidebarTrigger className="flex md:hidden" />

                <div className="flex items-center gap-[2px] select-none">
                    <HiOutlineUserCircle size={!isMobile ? 32 : 28} />
                    <p className="md:text-md text-sm text-gray-900">Usuário</p>
                </div>
            </header>

            <main className="flex flex-col lg:gap-12 gap-8 w-full sm:mt-[100px] mt-[70px] lg:p-8 md:p-6 p-3 bg-gray-50 md:border-t md:border-l md:border-gray-600 md:rounded-tl-lg">
                {children}
            </main>
        </SidebarProvider>
    );
}
