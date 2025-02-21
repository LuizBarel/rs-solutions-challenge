// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { LuBanknote, LuBox } from 'react-icons/lu';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { LiaChartPieSolid, LiaCoinsSolid } from 'react-icons/lia';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { MdFormatListBulleted } from 'react-icons/md';

import {
    chartConfigBilling,
    chartDataBilling,
    chartDataChannelSales,
    chartConfigChannelSales,
    tickFormatter,
} from './dashboard-data';

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import {
    CartesianGrid,
    Line,
    LineChart,
    Pie,
    PieChart,
    XAxis,
    YAxis,
} from 'recharts';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { m } from 'motion/react';
import { cn } from '@/lib/utils';

import { useInView } from 'react-intersection-observer';

import { useIsMobile } from '@/hooks/use-mobile';
import { useIsLaptop } from '@/hooks/use-laptop';

export default function Dashboard() {
    const isMobile = useIsMobile();
    const isLaptop = useIsLaptop();

    // Exibe o elemento com 10% dele visível na tela
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Exibe o elemento com 40% dele visível na tela
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <>
            <section
                id="dashboard-header"
                className="flex flex-col gap-4 xl:w-2/4 lg:w-3/4 w-full"
            >
                <h1 className="text-gray-900 md:text-6xl text-4xl font-semibold">
                    Olá, <span className="text-primary-700">Usuário</span>
                </h1>
                <p className="text-gray-600 md:text-lg text-md">
                    Utilize todos os gráficos nesse dashboard para controlar as
                    finanças da sua empresa, conhecer as vendas de cada produto,
                    analisar informações da empresa e muito mais.
                </p>
            </section>

            <section id="statistics" className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-900 md:text-xl text-lg font-semibold">
                        Estatísticas
                    </h2>

                    <m.div
                        className={cn(
                            'grid lg:grid-cols-3 xl:gap-12 gap-6 min-h-[125px]',
                            isMobile ? '!opacity-100 !translate-y-0' : '',
                        )}
                        initial={!isMobile ? { opacity: 0, y: -50 } : undefined}
                        animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
                        transition={
                            !isMobile
                                ? { duration: 0.5, ease: 'easeInOut' }
                                : undefined
                        }
                    >
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
                    </m.div>
                </div>

                <div className="flex flex-col gap-4 p-3 bg-white rounded-lg components-shadow">
                    <div className="flex items-center gap-1 text-gray-900">
                        <BiBarChartAlt2 size={20} />
                        <h3 className="text-sm font-medium">
                            GRÁFICO DE FATURAMENTO (R$)
                        </h3>
                    </div>

                    <ChartContainer
                        config={chartConfigBilling}
                        className="lg:h-[400px] h-[300px] w-full"
                    >
                        <LineChart
                            accessibilityLayer
                            data={chartDataBilling}
                            margin={
                                isLaptop ? { left: -16, right: 4 } : undefined
                            }
                        >
                            <CartesianGrid horizontal={false} />

                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={4}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />

                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickCount={6}
                                tickFormatter={(value) => tickFormatter(value)}
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

            <section id="channels" className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-900 md:text-xl text-lg font-semibold">
                        Canais
                    </h2>

                    <div className="flex flex-col gap-4 p-3 bg-white rounded-lg components-shadow">
                        <div className="flex items-center gap-1 text-gray-900">
                            <LiaChartPieSolid size={20} />
                            <h3 className="text-sm font-medium">
                                GRÁFICO DE VENDAS POR CANAL (%)
                            </h3>
                        </div>

                        <div className="flex justify-center" ref={ref1}>
                            {inView1 ? (
                                <ChartContainer
                                    config={chartConfigChannelSales}
                                    className="aspect-square lg:h-[400px] h-[300px] w-full"
                                >
                                    <PieChart>
                                        <ChartTooltip
                                            cursor={false}
                                            content={
                                                <ChartTooltipContent
                                                    percentage={true}
                                                />
                                            }
                                        />

                                        <ChartLegend
                                            className="flex flex-wrap"
                                            content={<ChartLegendContent />}
                                        />

                                        <Pie
                                            data={chartDataChannelSales}
                                            dataKey="sales"
                                            nameKey="channel"
                                            innerRadius={!isLaptop ? 110 : 70}
                                        ></Pie>
                                    </PieChart>
                                </ChartContainer>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-3 bg-white rounded-lg components-shadow">
                    <div className="flex items-center gap-1 text-gray-900">
                        <MdFormatListBulleted size={20} />
                        <h3 className="text-sm font-medium">
                            RANKING DE VENDAS POR CANAL
                        </h3>
                    </div>

                    <div className="md:px-3 md:pb-3" ref={ref4}>
                        {inView4 ? (
                            <m.div
                                className="lg:max-h-[400px] max-h-[300px] w-full relative overflow-auto rounded-t-lg"
                                initial={
                                    !isMobile
                                        ? { opacity: 0, y: 50 }
                                        : undefined
                                }
                                animate={
                                    !isMobile ? { opacity: 1, y: 0 } : undefined
                                }
                                transition={
                                    !isMobile
                                        ? {
                                              duration: 0.5,
                                              ease: 'easeInOut',
                                          }
                                        : undefined
                                }
                            >
                                <Table>
                                    <TableHeader className="sticky top-0">
                                        <TableRow header={true}>
                                            <TableHead className="min-w-[130px]">
                                                Canal
                                            </TableHead>
                                            <TableHead>Vendas (R$)</TableHead>
                                            <TableHead>%</TableHead>
                                            <TableHead>Pedidos</TableHead>
                                            <TableHead>Ticket Médio</TableHead>
                                            <TableHead>
                                                Qtd de Produtos
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Vitrine Totem</TableCell>
                                            <TableCell>10.540.500,00</TableCell>
                                            <TableCell>60%</TableCell>
                                            <TableCell>67,982</TableCell>
                                            <TableCell>42,89%</TableCell>
                                            <TableCell>167,892</TableCell>
                                        </TableRow>

                                        <TableRow subrow={true}>
                                            <TableCell icon={true}>
                                                Salão
                                            </TableCell>
                                            <TableCell>7.540.500,00</TableCell>
                                            <TableCell>40%</TableCell>
                                            <TableCell>57,982</TableCell>
                                            <TableCell>30,89%</TableCell>
                                            <TableCell>127,892</TableCell>
                                        </TableRow>

                                        <TableRow subrow={true}>
                                            <TableCell icon={true}>
                                                Drive Thru
                                            </TableCell>
                                            <TableCell>3.000.000,00</TableCell>
                                            <TableCell>20%</TableCell>
                                            <TableCell>10,000</TableCell>
                                            <TableCell>10%</TableCell>
                                            <TableCell>50,000</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </m.div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </section>

            <section
                id="rschallenge"
                className="flex justify-center items-center h-[100px] p-3 bg-white rounded-lg components-shadow"
            >
                <h3 className="md:text-md text-sm text-primary-700">
                    © 2025 RS Solutions Challenge
                </h3>
            </section>
        </>
    );
}
