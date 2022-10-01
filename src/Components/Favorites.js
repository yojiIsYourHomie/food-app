import React from 'react'
import { useGlobalContext } from '../context'

export default function Favorites() {
  const { favorites, removeFromFavorites, selectMeal} = useGlobalContext()

  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h3>Favorites</h3>
        <div className='favorites-container'>
          {favorites.map(item => {
            const {idMeal, strMealThumb: image, strMeal: text} = item
            return (
              <div key={idMeal} className='favorite-item'>
                <img src={image} alt={text} className='favorites-img img' onClick={() => selectMeal(idMeal, true)}/>
                <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>Remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
