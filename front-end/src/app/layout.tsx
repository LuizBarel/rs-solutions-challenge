import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
    title: 'RS Solutions Challenge',
    description: 'Desafio da empresa RS Solutions estilo Hackathon',
};

const open_sans = Open_Sans({
    subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={open_sans.className}>
            <body>{children}</body>
        </html>
    );
}
