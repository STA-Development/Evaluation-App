import moment from 'moment'

export const formatWithMonthName = (date: Date) => moment(date).format('MMM DD yyyy')
