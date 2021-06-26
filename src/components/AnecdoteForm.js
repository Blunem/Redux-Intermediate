import React from 'react'
import { newAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const createAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        if(content){
            e.target.anecdote.value = ''
            dispatch(newAnecdote(content.trim()))
        }
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit ={createAnecdote}>
                <div><input name ='anecdote'/>
                <button type ='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

export default AnecdoteForm 