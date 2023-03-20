import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import * as cardActions from '../../store/card'
import { Link } from 'react-router-dom'

function CardsPage(){
    const dispatch = useDispatch()
    const cards = useSelector(state => state.card)
    const cardsArr = cards.cards
    useEffect(() => {
        dispatch(cardActions.getAllCards())
    }, [dispatch])

    return(
        <>
            <h1>All Cards in the database</h1>
            {cardsArr?.map(card =>
                <>
                    <Link to={`/cards/${card.id}`}><img src={card?.card_image} alt={card?.card_name}></img></Link>
                </>
            )}
        </>
    )
}

export default CardsPage
