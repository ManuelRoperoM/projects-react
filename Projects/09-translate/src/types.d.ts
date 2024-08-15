import { type SUPPORTED_LANGUAGES, type AUTO_LANGUAGE } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage
export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action =
    | { type: 'INTERCHANGE_LANGUAGES'}
    | { type: 'SET_FROM_LANGUAGE', payLoad: string}
    | { type: 'SET_TO_LANGUAGE', payLoad: string}
    | { type: 'SET_FROM_TEXT', payLoad: string}
    | { type: 'SET_RESULT', payLoad: string}
