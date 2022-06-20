import * as React from 'react'
import {Order} from './ongoingEventsType'

export interface Data {
  id: string
  eventTitle: string
  eventStartsAt: string
  criteria: string
  criteriaScore: number
  performerType: string
  evaluatorFirstName: string
  evaluatorLastName: string
  evaluatorPosition: string
  evaluateeFirstName: string
  evaluateeLastName: string
  evaluateePosition: string
}

export interface HeadCell {
  id: keyof Data
  label: string
}

export interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}
