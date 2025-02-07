// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { LuBanknote, LuBox } from 'react-icons/lu';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { LiaCoinsSolid } from 'react-icons/lia';
import { BiBarChartAlt2 } from 'react-icons/bi';

import { chartConfig, chartData } from './dashboard-data';
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

export default function Dashboard() {
    return (
        <>
            <section
                id="dashboard-header"
                className="flex flex-col gap-4 xl:w-2/4 w-3/4"
            >
                <h1 className="text-gray-900 text-6xl font-semibold">
                    Olá, <span className="text-primary-700">Usuário</span>
                </h1>
                <p className="text-gray-600 text-lg">
                    Utilize todos os gráficos nesse dashboard para controlar as
                    finanças da sua empresa, conhecer as vendas de cada produto,
                    analisar informações da empresa e muito mais.
                </p>
            </section>

            <section id="statistics" className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-900 text-xl font-semibold">
                        Estatísticas
                    </h2>

                    <div className="grid grid-cols-3 gap-12 h-[125px]">
                        <div className="bg-white rounded-lg p-3 components-shadow">
                            <div className="flex gap-1 min-h-10 text-gray-900">
                                <LuBanknote
                                    size={20}
                                    className="relative top-[1px]"
                                />
                                <h3 className="text-sm font-medium">
                                    FATURAMENTO TOTAL
                                </h3>
                            </div>

                            <div className="flex flex-col w-full gap-1">
                                <h4 className="text-gray-900 text-xl font-semibold">
                                    R$ 2754,24
                                </h4>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-[2px] p-[2px] text-green-medium text-xs font-medium bg-green-light border-[0.5px] border-green-pure rounded-lg">
                                        1,3%
                                        <IoArrowUp size={12} />
                                    </div>
                                    <p className="text-gray-600 text-xs font-medium">
                                        mês passado
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 components-shadow">
                            <div className="flex gap-1 min-h-10 text-gray-900">
                                <LuBox
                                    size={20}
                                    className="relative top-[1px]"
                                />
                                <h3 className="text-sm font-medium">
                                    QUANTIDADE DE PEDIDOS
                                </h3>
                            </div>

                            <div className="flex flex-col w-full gap-1">
                                <h4 className="text-gray-900 text-xl font-semibold">
                                    545
                                </h4>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-[2px] p-[2px] text-red-medium text-xs font-medium bg-red-light border-[0.5px] border-red-pure rounded-lg">
                                        1,3%
                                        <IoArrowDown size={12} />
                                    </div>
                                    <p className="text-gray-600 text-xs font-medium">
                                        mês passado
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 components-shadow">
                            <div className="flex gap-1 min-h-10 text-gray-900">
                                <LiaCoinsSolid
                                    size={20}
                                    className="relative top-[1px]"
                                />
                                <h3 className="text-sm font-medium">
                                    TICKET MÉDIO
                                </h3>
                            </div>

                            <div className="flex flex-col w-full gap-1">
                                <h4 className="text-gray-900 text-xl font-semibold">
                                    R$ 47,95
                                </h4>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-[2px] p-[2px] text-green-medium text-xs font-medium bg-green-light border-[0.5px] border-green-pure rounded-lg">
                                        1,3%
                                        <IoArrowUp size={12} />
                                    </div>
                                    <p className="text-gray-600 text-xs font-medium">
                                        mês passado
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-3 bg-white rounded-lg components-shadow">
                    <div className="flex items-center gap-1 text-gray-900">
                        <BiBarChartAlt2 size={20} />
                        <h3 className="text-sm font-medium">
                            GRÁFICO DE FATURAMENTO
                        </h3>
                    </div>

                    <ChartContainer
                        config={chartConfig}
                        className="min-h-[200px] h-[400px] w-full"
                    >
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />

                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={4}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />

                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />

                            <ChartLegend
                                verticalAlign="top"
                                className="mb-2"
                                content={<ChartLegendContent />}
                            />

                            <Line
                                dataKey="ano_atual"
                                type="monotone"
                                stroke="var(--color-ano_atual)"
                                strokeWidth={2}
                                dot={false}
                            />

                            <Line
                                dataKey="ano_anterior"
                                type="monotone"
                                stroke="var(--color-ano_anterior)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </div>
            </section>
        </>
    );
}
