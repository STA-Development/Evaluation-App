import {v4 as uuidv4} from 'uuid'
import {ISubData} from '../../../../../types/types'

const submissionNotFinished: ISubData[] = [
  {
    id: uuidv4(),
    status: 'not finished',
    color: 'orange',
    employeesName: 'Jenny Cooper',
    employeesPosition: 'UI UX Desinger',
    employerName: 'Anna Adams',
    employerPosition: 'Project Manager',
    date: 'Nov 9',
    savedSubmission: false,
  },
]

export default submissionNotFinished
