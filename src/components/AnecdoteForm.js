import React from 'react'
import { newAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        if(content){
            e.target.anecdote.value = ''
            const newAnec = await anecdoteService.createNew(content.trim())
            console.log('new Anecdote', newAnec)
            dispatch(newAnecdote(newAnec))
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