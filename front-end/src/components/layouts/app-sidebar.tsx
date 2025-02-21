// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useState } from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../ui/collapsible';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

import { m } from 'motion/react';

import { useIsMobile } from '@/hooks/use-mobile';

import { HiMiniChevronRight } from 'react-icons/hi2';
import { LuChartColumn, LuLogOut } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa6';

import Image from 'next/image';
import Link from 'next/link';

import brandImg from '@public/brand/rssolutions-brand.png';
import brandMinimalImg from '@public/brand/rssolutions-brand-minimal.png';

import { useAuth } from '@/contexts/authContext';

export function AppSidebar() {
    // Estado da sidebar
    const { setOpenMobile, state } = useSidebar();

    // Estado mobile
    const isMobile = useIsMobile();

    // Estado do collapse
    const [isCollapse, setIsCollapse] = useState(true);

    // Manipulação do scroll em links âncoras
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            const offset = 100;
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });

            if (isMobile) {
                setOpenMobile(false);
            }
        }
    };

    // Função de logout
    const { logout } = useAuth();

    return (
        <Sidebar collapsible="icon" className="border-none z-20">
            <SidebarHeader>
                <Image
                    src={
                        !isMobile
                            ? state === 'expanded'
                                ? brandImg
                                : brandMinimalImg
                            : brandImg
                    }
                    alt="Logo"
                    width={!isMobile ? (state === 'expanded' ? 130 : 40) : 130}
                    loading="eager"
                />
            </SidebarHeader>

            <SidebarContent>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SidebarTrigger
                            className="hidden md:flex"
                            variant="sidebar_trigger"
                            size="small"
                        />
                    </TooltipTrigger>

                    <TooltipContent side="right">
                        {state === 'expanded'
                            ? 'Fechar barra lateral'
                            : 'Abrir barra lateral'}
                    </TooltipContent>
                </Tooltip>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Collapsible
                                defaultOpen
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    {isCollapse ? (
                                        <m.div
                                            className="left-indicator hidden group-data-[state=open]/collapsible:block"
                                            initial={
                                                !isMobile
                                                    ? { opacity: 0, x: -30 }
                                                    : undefined
                                            }
                                            animate={
                                                !isMobile
                                                    ? { opacity: 1, x: 0 }
                                                    : undefined
                                            }
                                            transition={
                                                !isMobile
                                                    ? {
                                                          duration: 0.3,
                                                          ease: 'easeInOut',
                                                      }
                                                    : undefined
                                            }
                                        ></m.div>
                                    ) : null}

                                    <Link href="/" scroll={false}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                asChild
                                                onClick={() =>
                                                    setIsCollapse(!isCollapse)
                                                }
                                            >
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton className="transition-colors group-data-[state=open]/collapsible:bg-primary-700 group-data-[state=open]/collapsible:text-primary-200">
                                                        <LuChartColumn />
                                                        <span>Dashboard</span>
                                                        <HiMiniChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                            </TooltipTrigger>

                                            <TooltipContent
                                                side="right"
                                                hidden={
                                                    state === 'expanded' ||
                                                    isMobile
                                                }
                                            >
                                                Dashboard
                                            </TooltipContent>
                                        </Tooltip>
                                    </Link>

                                    <CollapsibleContent className="mt-2">
                                        <m.div
                                            initial={
                                                !isMobile
                                                    ? { opacity: 0, y: -100 }
                                                    : undefined
                                            }
                                            animate={
                                                !isMobile
                                                    ? { opacity: 1, y: 0 }
                                                    : undefined
                                            }
                                            transition={
                                                !isMobile
                                                    ? {
                                                          duration: 0.3,
                                                          ease: 'easeInOut',
                                                      }
                                                    : undefined
                                            }
                                        >
                                            <SidebarMenuSub>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        onClick={() =>
                                                            handleScrollTo(
                                                                'statistics',
                                                            )
                                                        }
                                                    >
                                                        Estatísticas
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>

                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        onClick={() =>
                                                            handleScrollTo(
                                                                'channels',
                                                            )
                                                        }
                                                    >
                                                        Canais
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            </SidebarMenuSub>
                                        </m.div>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link href="#" scroll={false}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <SidebarMenuButton>
                                                <FaRegUser size={20} />
                                                Perfil
                                            </SidebarMenuButton>
                                        </TooltipTrigger>

                                        <TooltipContent
                                            side="right"
                                            hidden={
                                                state === 'expanded' || isMobile
                                            }
                                        >
                                            Perfil
                                        </TooltipContent>
                                    </Tooltip>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <SidebarMenuButton
                                            onClick={() => logout()}
                                        >
                                            <LuLogOut size={20} />
                                            Sair
                                        </SidebarMenuButton>
                                    </TooltipTrigger>

                                    <TooltipContent
                                        side="right"
                                        hidden={
                                            state === 'expanded' || isMobile
                                        }
                                    >
                                        Sair
                                    </TooltipContent>
                                </Tooltip>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
