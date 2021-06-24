import React from 'react'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const vote = (id) => { dispatch(incrementVotes(id)) }
    const descendingSort  = (a,b) => a.votes < b.votes? 1 : a.votes > b.votes? -1 : 0

    return ( 
        <div>
            {anecdotes.sort(descendingSort).map(anecdote =>
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