// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { SidebarTrigger, useSidebar } from '@/src/components/ui/sidebar';
import { AppSidebar } from '@/src/components/layouts/app-sidebar';

import { useIsMobile } from '@/src/hooks/use-mobile';
import { cn } from '@/src/lib/utils';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/src/components/ui/tooltip';

import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function Layout({ children }: { children: React.ReactNode }) {
    // Estado da sidebar
    const { state } = useSidebar();

    // Estado mobile
    const isMobile = useIsMobile();

    return (
        <>
            <AppSidebar />

            <header
                className={cn(
                    'w-full h-[100px] fixed flex justify-between bg-white border-b border-b-gray-600 p-8',
                    state === 'expanded'
                        ? 'md:pl-[calc(32px+var(--sidebar-width))]'
                        : 'md:pl-[calc(32px+var(--sidebar-width-icon))]',
                )}
            >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SidebarTrigger />
                    </TooltipTrigger>

                    <TooltipContent hidden={isMobile}>
                        {state === 'expanded'
                            ? 'Fechar barra lateral'
                            : 'Abrir barra lateral'}
                    </TooltipContent>
                </Tooltip>

                <div className="flex items-center gap-[2px] select-none">
                    <HiOutlineUserCircle size={32} />
                    <p className="text-md text-gray-900">Usuário</p>
                </div>
            </header>

            <main className="w-full p-8 bg-gray-50">{children}</main>
        </>
    );
}
