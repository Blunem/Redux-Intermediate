
export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

export const incrementVotes = (id) => {
  return {
    type: 'VOTE',
    data : { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return{
    type : 'INIT_ANECDOTES',
    data : anecdotes
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
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes +1}
      return state.map(a => a.id!==id? a : changedAnecdote)
    default: return state
  }
}

export default reducer