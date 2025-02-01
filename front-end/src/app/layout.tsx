import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
    title: 'RS Solutions Challenge',
    description: 'Desafio da empresa RS Solutions estilo Hackathon',
};

const montserrat = Montserrat({
    subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={montserrat.className}>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
