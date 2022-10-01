import React from 'react'
import { useGlobalContext } from '../context'

export default function Modal() {
  const {selectedMeal, closeModal} = useGlobalContext()

  const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source} = selectedMeal

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={image} alt={title} className='img modal-img'/>
        <div className='modal-content'>
          <h3>{title}</h3>
          <p><b>Instructions</b></p>
          <p>{text}</p>
          <a href={source} target='_blank' rel='noreferrer'>Visit Source</a>
          <button className='lucky-btn' onClick={closeModal}>Close</button>
        </div>
      </div>
    </aside>
  )
}
