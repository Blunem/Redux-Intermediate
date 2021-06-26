import React from 'react'
import { setFilter, clearFilter } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {

  const inputValue = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleChange = ({target}) => { dispatch(setFilter(target.value)) }
  const handleReset = () => { dispatch(clearFilter()) }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value ={inputValue} onChange={handleChange} />
      <button onClick={handleReset}>reset</button>
    </div>
  )
} 

export default Filter