export interface IArrow {
  type?: string
  onClick?: () => void
  isEdge?: boolean
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

export interface ISubmissionItems {
  id: string
  item: string
  value: number
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
