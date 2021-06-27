import React from 'react'
import { setFilter, clearFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  const inputValue = props.filter


  const handleChange = ({target}) => { props.setFilter(target.value) }
  const handleReset = () => { props.clearFilter() }

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

const mapDispatchToProps = {
  clearFilter,
  setFilter
}

const mapStateToProps = (state) => {
  return{
    filter: state.filter
  }
}
const ConnectedFilter = connect(mapStateToProps,mapDispatchToProps)(Filter)
export default ConnectedFilter