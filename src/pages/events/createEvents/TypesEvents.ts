export interface IEvaluator {
  name: string,
  position: string,
  email: string,
}

export interface IEvaluatee {
  name: string,
  position: string,
  date: object,
  monthlySalery: number
}

export interface ICriteria {
  name: string,
  rating: number
}

export type Event = {
  id: string,
  eventTitle: string,
  evaluators: IEvaluator[],
  evaluatees: IEvaluatee[],
  criterias: ICriteria[],
  ratingRange: number,
  bonusPercentage: number,
  startDate: {},
  endDate: {},
  status: string
}


export type Action =
  { type: 'Event_Title', payload: any }
  | { type: 'Evaluators', payload: any }
  | { type: 'Evaluatees', payload: any }
  | { type: 'Criterias', payload: any }
  | { type: 'Rating_Range', payload: any }
  | { type: 'Bonus_Percentage', payload: any }
  | { type: 'Start_Date', payload: any }
  | { type: 'End_Date', payload: any }
  | { type: 'Status', payload: any }

export type Dispatch = (action: Action) => void
export type EventProviderProps = { children: JSX.Element | JSX.Element[] }


export interface EventContextType {
  state?: Event,
  dispatch?: any
}



