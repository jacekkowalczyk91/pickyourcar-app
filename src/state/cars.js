import {database} from '../firebase'

const SET_CARS = 'cars/SET_CARS'

const setCars = carsData => ({
    type: SET_CARS,
    carsData
})

export const init = () => dispatch => {
    database().ref(`/cars/`).on(
        'value',
        snapshot => {
            dispatch(setCars(snapshot.val()))
        }
    )
}

export const addCarTask = (car) => dispatch => {
    database().ref(`/cars/`).push(car)
}

const initialState = {
    carsData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                carsData: action.carsData
            }
        default:
            return state
    }
}