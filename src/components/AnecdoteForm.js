import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {


    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        if(content){
            e.target.anecdote.value = ''
            props.createAnecdote(content.trim())
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

const mapDispatchToProps = {
    createAnecdote,
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
// export default AnecdoteForm 