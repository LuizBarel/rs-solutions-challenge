import api from '@/lib/api';

import { ChartConfig } from '@/components/ui/chart';
import { brlFormatter } from '@/lib/format';

// Tipando os dados
type DashboardData = {
    invoicing: {
        total: string | number;
        current: string | number;
    };
    orders: {
        total: number;
        current: number;
    };
    ticket: {
        current: string | number;
        monthly: string | number;
    };
};

export const invoicing = async (
    setData: React.Dispatch<React.SetStateAction<DashboardData>>,
) => {
    try {
        const response = await api.get('/orders/invoicing');

        if (response.data) {
            setData((prevData) => ({
                ...prevData,
                invoicing: {
                    total: brlFormatter.format(response.data.totalSum),
                    current: brlFormatter.format(response.data.currentSum),
                },
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

export const orders = async (
    setData: React.Dispatch<React.SetStateAction<DashboardData>>,
) => {
    try {
        const response = await api.get('/orders');

        if (response.data) {
            setData((prevData) => ({
                ...prevData,
                orders: {
                    total: response.data.totalQtdOrders,
                    current: response.data.currentQtdOrders,
                },
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

export const ticket = async (
    setData: React.Dispatch<React.SetStateAction<DashboardData>>,
) => {
    try {
        const response = await api.get('/orders/ticket');

        if (response.data) {
            setData((prevData) => ({
                ...prevData,
                ticket: {
                    current: brlFormatter.format(response.data.currentTicket),
                    monthly: brlFormatter.format(response.data.monthlyTicket),
                },
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

// Dados do Gráfico de Faturamento

export const chartDataBilling = [
    { month: 'Janeiro', ano_atual: 186, ano_anterior: 801 },
    { month: 'Fevereiro', ano_atual: 305, ano_anterior: 200 },
    { month: 'Março', ano_atual: 237, ano_anterior: 120 },
    { month: 'Abril', ano_atual: 731, ano_anterior: 190 },
    { month: 'Maio', ano_atual: 209, ano_anterior: 130 },
    { month: 'Junho', ano_atual: 214, ano_anterior: 140 },
    { month: 'Julho', ano_atual: 311, ano_anterior: 253 },
    { month: 'Agosto', ano_atual: 245, ano_anterior: 298 },
    { month: 'Setembro', ano_atual: 312, ano_anterior: 301 },
    { month: 'Outubro', ano_atual: 253, ano_anterior: 289 },
    { month: 'Novembro', ano_atual: 258, ano_anterior: 215 },
    { month: 'Dezembro', ano_atual: 322, ano_anterior: 242 },
];

export const chartConfigBilling = {
    ano_atual: {
        label: 'Ano Atual',
        color: 'hsl(var(--chart-1))',
    },
    ano_anterior: {
        label: 'Ano Anterior',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// Dados do Gráfico de Vendas por Canal

export const chartDataChannelSales = [
    { channel: 'vitrineTotem', sales: 18, fill: 'var(--color-vitrineTotem)' },
    { channel: 'pdvFacil', sales: 30, fill: 'var(--color-pdvFacil)' },
    { channel: 'menuFacil', sales: 23, fill: 'var(--color-menuFacil)' },
    { channel: 'voxline', sales: 29, fill: 'var(--color-voxline)' },
];

export const chartConfigChannelSales = {
    sales: {
        label: 'Vendas',
    },
    vitrineTotem: {
        label: 'Vitrine Totem',
        color: 'hsl(var(--chart-1))',
    },
    pdvFacil: {
        label: 'Pdv Fácil',
        color: 'hsl(var(--chart-2))',
    },
    menuFacil: {
        label: 'Menu Fácil',
        color: 'hsl(var(--chart-3))',
    },
    voxline: {
        label: 'Voxline',
        color: 'hsl(var(--chart-4))',
    },
} satisfies ChartConfig;
