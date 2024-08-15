import { useReducer } from 'react'
import { type FromLanguage, type Language, type State } from '../types'
import { Action } from '../types'
import { AUTO_LANGUAGE } from '../constants'

const initialTranslateState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducerTranslateActions = (state: State, action: Action) => {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payLoad
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payLoad
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payLoad,
      result: ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payLoad
    }
  }
  return state
}

export function useActionsTranslate () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducerTranslateActions, initialTranslateState)
  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }
  const setFromLanguage = (payLoad:FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payLoad })
  }
  const setToLanguage = (payLoad:Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payLoad })
  }
  const setFromText = (payLoad:string) => {
    dispatch({ type: 'SET_FROM_TEXT', payLoad })
  }
  const setResult = (payLoad:string) => {
    dispatch({ type: 'SET_RESULT', payLoad })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
