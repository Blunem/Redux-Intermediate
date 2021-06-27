
import anecdoteServices from '../services/anecdotes'

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createNew(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const incrementVotes = (anecdoteObject) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteServices.update({...anecdoteObject, votes: anecdoteObject.votes + 1})
    dispatch({
      type: 'VOTE',
      data : updatedAnecdote
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async (dispatch) => {
    const initialAnecdotes = await anecdoteServices.getAll()
    dispatch({
      type : 'INIT_ANECDOTES',
      data : initialAnecdotes
    })
  }
}

const reducer = (state = [], action) => {

  if(!state)
    return []
  switch(action.type){
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'VOTE':
      const id = action.data.id
      return state.map(a => a.id!==id? a : action.data)
    default: return state
  }
}

export default reducer