// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

import { SidebarTrigger } from '@/components/ui/sidebar';

import { HiOutlineUserCircle } from 'react-icons/hi2';

export function Header() {
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
    );
}
