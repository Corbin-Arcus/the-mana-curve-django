const GET_CARD = 'card/GET_CARD'


const getCards = (cards) => {
    return{
        type: GET_CARD,
        payload: cards
    }
}

export const getAllCards = () => async (dispatch) => {
    const res = await fetch(`http://localhost:8000/api/cards`)
    const data = await res.json()
    dispatch(getCards(data))
}

const cardReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_CARD:
            let cards = Object.values(action.payload)
            newState = {...state, cards}
            // console.log(newState)
            return newState
        default:
            return state
    }
}

export default cardReducer;