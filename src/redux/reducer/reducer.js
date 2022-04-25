import React from 'react'
import {GET_CONTACT} from '../action/actionTypes'
const initialState={
    contacts:[] 
}
const reducer = (state=initialState,action) => {
  switch (action.type) {
      case GET_CONTACT:
          return {...state, contacts: action.payload.users}
          
        
  
      default:
          return state
  }
}

export default reducer