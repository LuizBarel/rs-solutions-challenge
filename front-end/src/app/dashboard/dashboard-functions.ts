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
    yearlyInvoicing: {
        month: string;
        currentYear: number;
        previousYear: number;
    }[];
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

export const yearlyInvoicing = async (
    setData: React.Dispatch<React.SetStateAction<DashboardData>>,
) => {
    try {
        const response = await api.get('/orders/month-invoicing');

        if (response.data) {
            const thisYear = response.data.thisYearInvoicings;
            const lastYear = response.data.lastYearInvoicings;

            const months = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
            ];

            const data = months.map((month, index) => ({
                month,
                currentYear: thisYear[index][month],
                previousYear: lastYear[index][month],
            }));

            setData((prevData) => ({
                ...prevData,
                yearlyInvoicing: data,
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

export const chartConfigBilling = {
    currentYear: {
        label: 'Ano Atual',
        color: 'hsl(var(--chart-1))',
    },
    previousYear: {
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
