export interface ISearchDataEvent {
  value: string
  setValue: (vlue: string) => void
  evoluationCriteria: string
  setEvoluationCriteria: (value: string) => void
  performerType: string
  setPerformerType: (value: string) => void
  evaluatees: string
  setEvaluatees: (value: string) => void
  evaluateesPosition: string
  setEvaluateesPosition: (value: string) => void
  evaluators: string
  setEvaluators: (value: string) => void
  evaluatorsPosition: string
  setEvaluatorsPosition: (value: string) => void
}
