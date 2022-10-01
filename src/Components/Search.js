import React, { useState } from 'react'
import { useGlobalContext } from '../context'


export default function Search() {

  const [text, setText] = useState('')
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      setSearchTerm(text)
    } 
  }

  function handleRandomMeal() {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search your favorite meal' value={text} className='form-input' onChange={handleChange}/>
        <button type='submit' className='search-btn'>Search</button>
        <button type='button' className='lucky-btn' onClick={handleRandomMeal}>I'm Feeling Lucky</button>
      </form>
    </header>
  )
}
