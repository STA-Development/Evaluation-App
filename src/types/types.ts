import React from 'react'
import {store} from '../redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IselectItems {
  id: string
  name: string
  value?: number
}

export interface Iarrow {
  type?: string
  onClick?: () => void
  isEdge?: boolean
}

export interface IauthPropsState {
  user: string
  email: string
  uid: string
  isAuth: boolean
  token: string
}

export interface ItabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export interface IrowsInfo {
  [keyof: string]: string | number
}

export type Order = 'asc' | 'desc'

export interface IheadCell {
  id: string
  name: keyof IrowsInfo
  label: string
}

export interface ItableHeaderCell {
  valueToOrderBy: string | number
  orderDirection: Order
  handleRequestSort: (event: React.MouseEvent, property: keyof IrowsInfo) => void
}

export interface IsubmissionDataTypes {
  color: string
  status: string
  employeesName: string
  employeesPosition: string
  employerName: string
  employerPosition: string
  date: string
  savedSubmission: boolean
}

export interface IsubmissionItems {
  id: string
  item: string
  value: number
}

export interface IsubData {
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
