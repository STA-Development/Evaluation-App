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
  { type: 'EVENT_TITLE', eventTitle: string }
  | { type: 'EVALUATORS', evaluators: IEvaluator[] }
  | { type: 'EVALUATEES', evaluatees: IEvaluatee[] }
  | { type: 'CRITERIAS', criterias: ICriteria[] }
  | { type: 'RATING_RANGE', ratingRange: number }
  | { type: 'BONUS_PERCENTAGE', bonusPercentage: number }
  | { type: 'START_DATE', startDate: object }
  | { type: 'END_DATE', endDate: object }
  | { type: 'STATUS', status: string }

export type Dispatch = (action: Action) => void
export type EventProviderProps = { children: JSX.Element | JSX.Element[] }

export interface ITopManagerEmptyObjInfoType {
  id: string,
  header: string,
  name: string,
  position: string,
  email: string
}



