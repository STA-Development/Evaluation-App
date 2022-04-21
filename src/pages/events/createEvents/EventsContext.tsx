import React, {useReducer} from "react";
import {v4 as uuidv4} from "uuid";
import {Action, Event, EventProviderProps} from "./TypesEvents";

const initialState: Event = {
  id: uuidv4(),
  eventTitle: "",
  evaluators: [],
  evaluatees: [],
  criterias: [],
  ratingRange: 0,
  bonusPercentage: 0,
  startDate: {},
  endDate: {},
  status: ""
}

const initialEventContext: {
  state: Event,
  dispatch: React.Dispatch<Action>
} = {
  state: initialState,
  dispatch: () => ({})
}

export const EventContext = React.createContext(initialEventContext)

function eventReducer(state: Event, action: Action) {
  switch (action.type) {
    case 'EVENT_TITLE': {
      return {...state, id: uuidv4(), eventTitle: action.eventTitle}
    }
    case 'EVALUATORS': {
      return {...state, evaluators: action.evaluators}
    }
    case 'EVALUATEES': {
      return {...state, evaluatees: action.evaluatees}
    }
    case 'CRITERIAS': {
      return {...state, criterias: action.criterias}
    }
    case 'RATING_RANGE': {
      return {...state, ratingRange: action.ratingRange}
    }
    case 'BONUS_PERCENTAGE': {
      return {...state, bonusPercentage: action.bonusPercentage}
    }
    case 'START_DATE': {
      return {...state, startDate: action.startDate}
    }
    case 'END_DATE': {
      return {...state, endDate: action.endDate}
    }
    case 'STATUS': {
      return {...state, status: action.status}
    }
    default: {
      return state
    }
  }
}


export const ContextProvider = ({children}: EventProviderProps) => {
  const [state, dispatch] = useReducer(eventReducer, initialState)
  const value = React.useMemo(() => ({
    state, dispatch
  }), []);

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}




