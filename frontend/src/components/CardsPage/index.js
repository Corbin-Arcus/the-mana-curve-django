import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import * as cardActions from '../../store/card'
import { Link } from 'react-router-dom'

function CardsPage(){
    const dispatch = useDispatch()
    const card = useSelector(state => state.card)
    const cardsArr = card.cards
    useEffect(() => {
        dispatch(cardActions.getAllCards())
    }, [dispatch])

    return(
        <>
            <h1>All Cards in the database</h1>
            {cardsArr?.map(card =>
                <>
                    <h1>{card.card_name}</h1>
                </>
            )}
        </>
    )
}

export default CardsPage
