import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';

import { LazyMotion, domAnimation } from 'motion/react';

export const metadata: Metadata = {
    title: 'RS Solutions Challenge',
    description: 'Desafio da empresa RS Solutions estilo Hackathon',
};

const open_sans = Open_Sans({
    subsets: ['latin'],
});

import { AuthProvider } from '@/contexts/authContext';
import { Toaster } from '@/components/ui/sonner';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={open_sans.className}>
            <body>
                <AuthProvider>
                    <LazyMotion features={domAnimation}>
                        {children}
                        <Toaster
                            position="top-right"
                            toastOptions={{
                                style: {
                                    background: '#F4F4F4',
                                    borderColor: '#767679',
                                    color: '#15161A',
                                },
                            }}
                        />
                    </LazyMotion>
                </AuthProvider>
            </body>
        </html>
    );
}
