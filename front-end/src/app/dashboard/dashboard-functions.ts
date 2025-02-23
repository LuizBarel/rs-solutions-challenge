import api from '@/lib/api';

import { brlFormatter } from '@/lib/format';
import { ChartConfig } from '@/components/ui/chart';

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
    chartChannels: {
        channelTag: string;
        percent: number;
        fill: string;
    }[];
    tableChannels: {
        channelTag: string;
        qtdItems: string;
        qtdOrders: string;
        total: string;
        ticket: number;
        percent: number;
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

export const channels = async (
    setData: React.Dispatch<React.SetStateAction<DashboardData>>,
) => {
    try {
        const response = await api.get('/orders/channels');

        if (response.data) {
            interface ChartChannel {
                channelTag: string;
                percent: number;
                fill: string;
            }

            const chartData = response.data.map((channel: ChartChannel) => ({
                channelTag: channel.channelTag,
                percent: parseFloat(channel.percent.toFixed(2)),
                fill: `var(--color-${channel.channelTag})`,
            }));

            interface TableChannel {
                channelTag: string;
                qtdItems: number;
                qtdOrders: number;
                total: number;
                ticket: number;
                percent: number;
            }

            const tableData = response.data.map((channel: TableChannel) => ({
                channelTag: channel.channelTag,
                qtdItems: channel.qtdItems,
                qtdOrders: channel.qtdOrders,
                total: brlFormatter.format(channel.total),
                ticket: brlFormatter.format(channel.ticket),
                percent: channel.percent.toFixed(2),
            }));

            setData((prevData) => ({
                ...prevData,
                chartChannels: chartData,
                tableChannels: tableData,
            }));
        }
    } catch (error) {
        console.error(error);
    }
};

// Configuração dos gráficos

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

export const chartConfigChannelSales = {
    totem: {
        label: 'Vitrine Totem',
        color: 'hsl(var(--chart-1))',
    },
    'pdv-facil': {
        label: 'Pdv Fácil',
        color: 'hsl(var(--chart-2))',
    },
    'menu-facil': {
        label: 'Menu Fácil',
        color: 'hsl(var(--chart-3))',
    },
    'anota-ai': {
        label: 'Anota AI',
        color: 'hsl(var(--chart-4))',
    },
} satisfies ChartConfig;
