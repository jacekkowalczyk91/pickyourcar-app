import {database} from '../firebase'

const SET_CARS = 'cars/SET_CARS'

const setCars = cars => ({
    type: SET_CARS,
    carsData: cars
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

export const deleteCar = id => dispatch => {
    database().ref(`/people/${id}`).set(null)
}

const initialState = {
    carsData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                carsData: Object.entries(action.carsData).map(
                    ([key, val]) => ({
                        id: key,
                        ...val
                    })
                )
            }
        default:
            return state
    }
}