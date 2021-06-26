
const initialState = ''

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}

export const clearFilter = () => {
  return {
      type: 'CLEAR_FILTER',
      filter : ''
  }
}

const reducer = (state = initialState, action) => {
    // console.log('state now: ', state)
    // console.log('action', action)
  
    switch(action.type){
      case 'INIT':
          return ''
      case 'SET_FILTER':
        return action.filter
      case 'CLEAR_FILTER':
        return action.filter
      default: return state
    }
  }
  
  export default reducer