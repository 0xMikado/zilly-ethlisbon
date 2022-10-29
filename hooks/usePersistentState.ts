import { useState, useEffect } from 'react'

export default function usePersistentState<Type>(genesisState: Type, path: string): [Type, ((value: Type | Function) => void)] {
  let initialState = genesisState;

  const restoredState = JSON.parse(sessionStorage.getItem(path) as string)
  if (restoredState) {
    initialState = restoredState
  }

  const [state, setState] = useState<Type>(initialState)

  // In order to reproduce useState behaviour, value can either be the content or a function
  // This is usually done to access previous state, or compute stuff before setting the state
  // Example:
  // setPersitentState((previousState) => {
  //    do some stuff
  //
  //    return newState;
  // })
  function setPersitentState(value: Type | Function) {
    if (typeof value === "function") {
      // Type casting for linter
      const func: Function = value
      value = func(state)
    }

    setState(value as Type)
    sessionStorage.setItem(path, JSON.stringify(value))
  }

  return [state, setPersitentState];
}
