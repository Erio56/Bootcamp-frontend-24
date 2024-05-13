/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const LanguagesContext = React.createContext({
  languages: [],
  setLanguages: () => {}
})

const LanguagesContextProvider = (props) => {

  const setLanguages = (languages) => {
    setState({...state, languages: languages})
  }

  const initState = {
    languages: ['JavaScript', 'Python'],
    setLanguages: setLanguages
  } 

  const [state, setState] = useState(initState)

  return (
    <LanguagesContext.Provider value={state}>
      {props.children}
    </LanguagesContext.Provider>
  )
}

export default LanguagesContextProvider;