// Formatador para real
export const brlFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

/**
 * Função para formatar o tick do Gráfico de Faturamento
 * @param value - Valor do tick
 * @constant units - Array das unidades de medida
 * @var unitIndex - Índice do array 'units'
 * @return - Valor formatado
 */
export function tickFormatter(value: number) {
    const units = ['K', 'M', 'B', 'T'];
    let unitIndex = -1;

    while (value >= 1000 && unitIndex < units.length - 1) {
        value /= 1000;
        unitIndex++;
    }

    return unitIndex >= 0
        ? `${Math.floor(value)}${units[unitIndex]}`
        : value.toString();
}
