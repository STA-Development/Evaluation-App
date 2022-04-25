import React from 'react'
import {store} from '../redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface ISelectItems {
  id: string
  name: string
  value?: number
}

export interface IArrow {
  type?: string
  onClick?: () => void
  isEdge?: boolean
}

export interface IAuthPropsState {
  user: string
  email: string
  uid: string
  isAuth: boolean
  token: string
}

export interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

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

export interface ISubmissionDataTypes {
  color: string
  status: string
  employeesName: string
  employeesPosition: string
  employerName: string
  employerPosition: string
  date: string
  savedSubmission: boolean
}

export interface ISubmissionItems {
  id: string
  item: string
  value: number
}

export interface ISubData {
  id: string
  status: string
  employeesName: string
  employeesPosition: string
  employerName: string
  employerPosition: string
  date: string
  savedSubmission: boolean
  color: string
}
