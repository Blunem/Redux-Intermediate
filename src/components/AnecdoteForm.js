import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        if(content){
            e.target.anecdote.value = ''
            dispatch(createAnecdote(content.trim()))
        }
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit ={addAnecdote}>
                <div><input name ='anecdote'/>
                <button type ='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

export default AnecdoteForm 