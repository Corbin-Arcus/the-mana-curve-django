const GET_CARDS = 'card/GET_CARD'
const ADD_CARD = 'card/ADD_CARD'
// const GET_CARD = 'card/GET_CARD'

const addCard = (card) => {
    return{
        type: ADD_CARD,
        payload: card
    }
}


const getCards = (cards) => {
    return{
        type: GET_CARDS,
        payload: cards
    }
}

// const getCard = (card) => {
//     return{
//         type: GET_CARD,
//         payload: card
//     }
// }

export const addACard = (cardName) => async (dispatch) => {
    const card = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)

    const data = await card.json()

    const card_name = data.name;
    const card_image = data.image_uris['small']
    const card_type = data.type_line
    const cmc = data.cmc
    const mana_cost = data.mana_cost
    const power = data.power
    const toughness = data.toughness
    const oracle_text = data.oracle_text
    const legalities = data.legalities
    const useableLegalities = JSON.stringify(legalities)

    const res = await fetch(`http://localhost:8000/api/cards/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            card_name,
            card_image,
            card_type,
            cmc,
            mana_cost,
            power,
            toughness,
            oracle_text,
            legalities: useableLegalities
        })
    })


  if (res.ok) {
    const data = await res.json()
    dispatch(addCard(data))
    return data
  }
  else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) return data.errors
  }
  else {
    return ['An error occurred. Please try again']
  }
}

export const getAllCards = () => async (dispatch) => {
    const res = await fetch(`http://localhost:8000/api/cards`)
    const data = await res.json()
    dispatch(getCards(data))
}

// export const getOneCard = (id) => async (dispatch) => {
//     const res = await fetch(`http://localhost:8000/api/cards/${id}`)
//     const data = await res.json()
//     dispatch(getCard(data))
// }

const cardReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ADD_CARD:
            newState = {...state, ...action.payload}
            return newState
        case GET_CARDS:
            let cards = Object.values(action.payload)
            newState = {...state, cards}
            return newState
        default:
            return state
    }
}

export default cardReducer;
