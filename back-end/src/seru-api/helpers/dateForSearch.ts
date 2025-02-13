export function getFormattedDates() {
    const oneHour: number = 60;
    const currentDate: Date = new Date()
    const currentDateFormatted: string = currentDate.toISOString().split('.')[0] + 'Z'
    const minusOneHourDate: Date = new Date(currentDate.setMinutes(currentDate.getMinutes() - oneHour))
    const minusOneHourDateFormatted: string = minusOneHourDate.toISOString().split('.')[0] + 'Z'

    return { currentDateFormatted, minusOneHourDateFormatted }
}

