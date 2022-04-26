import React, {useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Action, Event, EventProviderProps} from './TypesEvents'
import createEventReducerTypes from '../../../types'

const initialState: Event = {
  id: uuidv4(),
  eventTitle: '',
  evaluators: [],
  evaluatees: [],
  criterias: [],
  ratingRange: 0,
  bonusPercentage: 0,
  startDate: {},
  endDate: {},
  status: '',
}

const initialEventContext: {
  state: Event
  dispatch: React.Dispatch<Action>
} = {
  state: initialState,
  dispatch: () => ({}),
}

export const EventContext = React.createContext(initialEventContext)

function eventReducer(state: Event, action: Action): Event {
  switch (action.type) {
    case createEventReducerTypes.eventTitle: {
      return {...state, id: uuidv4(), eventTitle: action.eventTitle}
    }
    case createEventReducerTypes.evaluators: {
      return {...state, evaluators: action.evaluators}
    }
    case createEventReducerTypes.evaluatees: {
      return {...state, evaluatees: action.evaluatees}
    }
    case createEventReducerTypes.criterias: {
      return {...state, criterias: action.criterias}
    }
    case createEventReducerTypes.ratingRange: {
      return {...state, ratingRange: action.ratingRange}
    }
    case createEventReducerTypes.bonusPercentage: {
      return {...state, bonusPercentage: action.bonusPercentage}
    }
    case createEventReducerTypes.startDate: {
      return {...state, startDate: action.startDate}
    }
    case createEventReducerTypes.endDate: {
      return {...state, endDate: action.endDate}
    }
    case createEventReducerTypes.status: {
      return {...state, status: action.status}
    }
    default: {
      return state
    }
  }
}

export const EventContextProvider = ({children}: EventProviderProps) => {
  const [state, dispatch] = useReducer(eventReducer, initialState)
  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [],
  )

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}
