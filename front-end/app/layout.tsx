import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: 'RS Solutions Challenge',
    description: 'Desafio da empresa RS Solutions estilo Hackathon',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
