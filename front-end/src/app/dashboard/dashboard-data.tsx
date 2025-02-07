import { ChartConfig } from '@/components/ui/chart';

export const chartData = [
    { month: 'Janeiro', ano_atual: 186, ano_anterior: 80 },
    { month: 'Fevereiro', ano_atual: 305, ano_anterior: 200 },
    { month: 'Março', ano_atual: 237, ano_anterior: 120 },
    { month: 'Abril', ano_atual: 73, ano_anterior: 190 },
    { month: 'Maio', ano_atual: 209, ano_anterior: 130 },
    { month: 'Junho', ano_atual: 214, ano_anterior: 140 },
    { month: 'Julho', ano_atual: 311, ano_anterior: 253 },
    { month: 'Agosto', ano_atual: 245, ano_anterior: 298 },
    { month: 'Setembro', ano_atual: 312, ano_anterior: 301 },
    { month: 'Outubro', ano_atual: 253, ano_anterior: 289 },
    { month: 'Novembro', ano_atual: 258, ano_anterior: 215 },
    { month: 'Dezembro', ano_atual: 322, ano_anterior: 242 },
];

export const chartConfig = {
    ano_atual: {
        label: 'Ano Atual',
        color: 'hsl(var(--chart-1))',
    },
    ano_anterior: {
        label: 'Ano Ant.',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;
