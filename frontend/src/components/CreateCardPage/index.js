import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import * as cardActions from '../../store/card'
import { NavLink, useParams, Link } from 'react-router-dom'

function CreateCardPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const card = useSelector(state => state.card)
  const [cardName, setCardName] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cardName.length > 100) {
      setErrors(['Card name must be between 5 and 100 characters'])
    }
    else {
      setErrors([])
      await dispatch(cardActions.addACard(cardName))
    }
    setCardName('')
  }
  

  return(
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h1>Search for a Card by Name</h1>
        <label>
          Card Name
          <input
          type='text'
          name='card_name'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
          />
        </label>
        <button type='submit'>Add to Database</button>
      </form>
    </>
  )
}

export default CreateCardPage
