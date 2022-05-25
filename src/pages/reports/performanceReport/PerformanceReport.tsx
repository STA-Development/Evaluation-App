import React, {useState} from 'react'
import SearchByDataEvent from './SearchByDataEvent'
import {Box} from '@mui/material'

const PerformanceReport = () => {
  const [value, setValue] = useState<string>('')
  const [evoluationCriteria, setEvoluationCriteria] = useState<string>('')
  const [performerType, setPerformerType] = useState<string>('')
  const [evaluatees, setEvaluatees] = useState<string>('')
  const [evaluateesPosition, setEvaluateesPosition] = useState<string>('')
  const [evaluators, setEvaluators] = useState<string>('')
  const [evaluatorsPosition, setEvaluatorsPosition] = useState<string>('')

  return (
    <Box>
      <SearchByDataEvent
        value={value}
        setValue={setValue}
        evoluationCriteria={evoluationCriteria}
        setEvoluationCriteria={setEvoluationCriteria}
        performerType={performerType}
        setPerformerType={setPerformerType}
        evaluatees={evaluatees}
        setEvaluatees={setEvaluatees}
        evaluateesPosition={evaluateesPosition}
        setEvaluateesPosition={setEvaluateesPosition}
        evaluators={evaluators}
        setEvaluators={setEvaluators}
        evaluatorsPosition={evaluatorsPosition}
        setEvaluatorsPosition={setEvaluatorsPosition}
      />
    </Box>
  )
}

export default PerformanceReport
