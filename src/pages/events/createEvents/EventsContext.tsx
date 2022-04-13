import React, {useReducer} from "react";
import {Action, Event, EventContextType, EventProviderProps} from "./TypesEvents";
import {v4 as uuidv4} from "uuid";

const emptyEvent: Event = {
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

// const initialEventContext: { state: Event, dispatch: React.Dispatch<Action> } = {state: }

export const EventContext = React.createContext <EventContextType>({})

export function eventReducer(state: Event, action: Action) {
  switch (action.type) {
    case 'Event_Title': {
      return {...state, id: uuidv4(), eventTitle: action.payload}
    }
    case 'Evaluators': {
      return {...state, evaluators: action.payload}
    }
    case 'Evaluatees': {
      return {...state, evaluatees: action.payload}
    }
    case 'Criterias': {
      return {...state, criterias: action.payload}
    }
    case 'Rating_Range': {
      return {...state, ratingRange: action.payload}
    }
    case 'Bonus_Percentage': {
      return {...state, bonusPercentage: action.payload}
    }
    case 'Start_Date': {
      return {...state, startDate: action.payload}
    }
    case 'End_Date': {
      return {...state, endDate: action.payload}
    }
    case 'Status': {
      return {...state, status: action.payload}
    }
  }
}


export function ContextProvider({children}: EventProviderProps) {
  const [state, dispatch] = useReducer(eventReducer, emptyEvent)
  return <EventContext.Provider value={{state, dispatch}}>{children}</EventContext.Provider>
}




