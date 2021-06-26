import React from 'react'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {

    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter? state.filter.toLowerCase() : '' )

    const voteNotification = (anecdote) => {dispatch(setNotification(`you voted '${anecdote}'`))}
    const cleanNotification = (anecdote) => {
        setTimeout(()=>{
            dispatch(clearNotification())
        },5000)
    }

    const vote = (id) => {
        const votedAnecdote = anecdotes.find(a => a.id === id)
        dispatch(incrementVotes(id))
        voteNotification(votedAnecdote.content)
        cleanNotification()
    
    }
    const descendingSort  = (a,b) => a.votes < b.votes? 1 : a.votes > b.votes? -1 : 0

    const displayAnecdotes = () => {
        const sortedAnecdotes = anecdotes.sort(descendingSort)
        return filter? sortedAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter)) : sortedAnecdotes
    }
  
    return ( 
        <div>
            {displayAnecdotes().map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
    
}
export default AnecdoteList