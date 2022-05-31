import {createEventReducerTypes} from '../../../types/createEventTypes'

export interface IEvaluator {
  id: string
  header: string
  name: string
  nameValue: string
  position: string
  positionValue: string
  email: string
  emailValue: string
}

export interface IcreateEventReducerTypes {
  eventTitle: string
  evaluators: string
  evaluatees: string
  criterias: string
  ratingRange: string
  bonusPercentage: string
  startDate: string
  endDate: string
  status: string
}

export interface ICriteriaCardParams {
  criteriaData: ICriteriaPaperInfo[]
  setCriteriaData: (value: ICriteriaPaperInfo[]) => void
}

export interface IRatingScoreParams {
  evaluateesList: IEvaluatee[]
  ratingScoreArr: IratingScoreObj[]
  setPercentageIsSet: (value: boolean) => void
  setRatingFinalValue: (value: IratingScoreObj) => void
  setRatingScoreArr: (value: IratingScoreObj[]) => void
}

export interface IBonusPercentageParams {
  evaluateesList: IEvaluatee[]
  percentageIsSet: boolean
  setEvaluateesList: (value: IEvaluatee[]) => void
}

export interface IratingScoreObj {
  from: number
  to: number
  id: number
  isSelected: boolean
}

export interface RatingValues {
  from: number
  to: number
}

export interface IEvaluatee {
  id: string
  header: string
  name: string
  nameValue: string
  position: string
  positionValue: string
  date: string
  dateValue: unknown
  salary: string
  salaryValue: number | string
  isEditable: boolean
}

export interface Event {
  activePage: string
  id: string
  eventTitle: string
  evaluators: IEvaluator[]
  evaluatees: IEvaluatee[]
  criterias: ICriteriaPaperInfo[]
  ratingRange: IratingScoreObj
  bonusPercentage: number
  startDate: object
  endDate: object
  status: string
}

export type Action =
  | {type: createEventReducerTypes.evaluators; evaluators: IEvaluator[]}
  | {type: createEventReducerTypes.eventTitle; eventTitle: string}
  | {type: createEventReducerTypes.evaluatees; evaluatees: IEvaluatee[]}
  | {type: createEventReducerTypes.criterias; criterias: ICriteriaPaperInfo[]}
  | {type: createEventReducerTypes.ratingRange; ratingRange: IratingScoreObj}
  | {type: createEventReducerTypes.bonusPercentage; bonusPercentage: number}
  | {type: createEventReducerTypes.startDate; startDate: object}
  | {type: createEventReducerTypes.endDate; endDate: object}
  | {type: createEventReducerTypes.status; status: string}
  | {type: createEventReducerTypes.updateActivePageToCriterias; activePage: string}

export type Dispatch = (action: Action) => void
export type EventProviderProps = {children: JSX.Element | JSX.Element[]}

export interface ITopManagerEmptyObjInfoType {
  id: string
  header: string
  name: string
  position: string
  email: string
}

export interface ICriteriaPaperInfo {
  id: string | React.MouseEvent<HTMLButtonElement>
  name: string
  criteria: boolean
  subCriteria: ISubCriteria[]
}

export interface ISubCriteria {
  id: number
  name: string
  result: boolean
}
