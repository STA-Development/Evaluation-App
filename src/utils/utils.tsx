import {IRowsInfo, Order} from '../types/types'

const colors = () => Math.floor(Math.random() * 255)
export const randomColor = () => `rgb(${colors()} ${colors()}  ${colors()})`
export const randomNumber = () => Math.floor(Math.random() * 100)

export function descendingComporator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export const getComparator = <Key extends keyof IRowsInfo>(
  order: Order,
  orderBy: Key,
): ((a: {[key in Key]: number | string}, b: {[key in Key]: number | string}) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComporator(a, b, orderBy)
    : (a, b) => -descendingComporator(a, b, orderBy)
}

export const sortedRowInformation = <T,>(array: T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}
