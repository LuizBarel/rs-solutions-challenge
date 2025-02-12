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

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'motion/react';

import { useInView } from 'react-intersection-observer';

export default function Dashboard() {
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

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
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
                    </motion.div>
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
                        className="min-h-[200px] h-[400px] w-full"
                    >
                        <LineChart
                            accessibilityLayer
                            data={chartDataBilling}
                            margin={{
                                right: 32,
                            }}
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
                    <h2 className="text-gray-900 text-xl font-semibold">
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
                                    className="aspect-square min-h-[200px] h-[400px]"
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
                                            content={<ChartLegendContent />}
                                        />

                                        <Pie
                                            data={chartDataChannelSales}
                                            dataKey="sales"
                                            nameKey="channel"
                                            innerRadius={110}
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

                    <ScrollArea
                        className="max-h-[400px] w-full rounded-t-md px-3 pb-3"
                        ref={ref4}
                    >
                        {inView4 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                <Table>
                                    <TableHeader className="sticky top-0">
                                        <TableRow header={true}>
                                            <TableHead>Canal</TableHead>
                                            <TableHead>Vendas (R$)</TableHead>
                                            <TableHead className="w-[150px]">
                                                %
                                            </TableHead>
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
                            </motion.div>
                        ) : (
                            <div></div>
                        )}
                    </ScrollArea>
                </div>
            </section>

            <section
                id="rschallenge"
                className="flex justify-center items-center h-[100px] p-3 bg-white rounded-lg components-shadow"
            >
                <h3 className="text-md text-primary-700">
                    © 2025 RS Solutions Challenge
                </h3>
            </section>
        </>
    );
}
