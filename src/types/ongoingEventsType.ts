import React from 'react'

export interface IRowsInfo {
  [keyof: string]: string | number
}

export type Order = 'asc' | 'desc'

export interface IHeadCell {
  id: string
  name: keyof IRowsInfo
  label: string
}

export interface ITableHeaderCell {
  valueToOrderBy: string | number
  orderDirection: Order
  handleRequestSort: (event: React.MouseEvent, property: keyof IRowsInfo) => void
}
