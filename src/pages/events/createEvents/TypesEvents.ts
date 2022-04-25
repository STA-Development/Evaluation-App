import createEventReducerTypes from '../../../types'

export interface IEvaluator {
  id: string,
  header: string,
  name: string,
  nameValue: string,
  position: string,
  positionValue: string,
  email: string,
  emailValue: string
}

export interface IcreateEventReducerTypes  {
  eventTitle: string,
  evaluators: string,
  evaluatees: string,
  criterias: string,
  ratingRange: string,
  bonusPercentage: string,
  startDate: string,
  endDate: string,
  status: string
}

export interface IEvaluatee {
  id: string,
  header: string,
  name: string,
  nameValue: string,
  position: string,
  positionValue: string,
  date: string,
  dateValue: unknown,
  salary: string,
  salaryValue: number | string | null
}

export interface ICriteria {
  name: string,
  rating: number
}


export interface Event {
  id: string,
  eventTitle: string,
  evaluators: IEvaluator[],
  evaluatees: IEvaluatee[],
  criterias: ICriteria[],
  ratingRange: number,
  bonusPercentage: number,
  startDate: object,
  endDate: object,
  status: string
}

export type Action =
   { type: createEventReducerTypes.evaluators, evaluators: IEvaluator[] }
  | { type: createEventReducerTypes.eventTitle, eventTitle: string }
  | { type: createEventReducerTypes.evaluatees, evaluatees: IEvaluatee[] }
  | { type: createEventReducerTypes.criterias, criterias: ICriteria[] }
  | { type: createEventReducerTypes.ratingRange, ratingRange: number }
  | { type: createEventReducerTypes.bonusPercentage, bonusPercentage: number }
  | { type: createEventReducerTypes.startDate, startDate: object }
  | { type: createEventReducerTypes.endDate, endDate: object }
  | { type: createEventReducerTypes.status, status: string }

export type Dispatch = (action: Action) => void
export type EventProviderProps = { children: JSX.Element | JSX.Element[] }

export interface ITopManagerEmptyObjInfoType {
  id: string,
  header: string,
  name: string,
  position: string,
  email: string
}



