import {database} from '../firebase'

const SET_CARS = 'cars/SET_CARS'

const setCars = cars => ({
    type: SET_CARS,
    carsData: cars || {}
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
    database().ref(`/cars/${id}`).set(null)
}

export const toggleChosen = id => (dispatch, getState) => {
    const car = getState().cars.carsData.find(car => car.id === id)
    database().ref('/cars/' + id + '/isChosen').set(!car.isChosen)
}

const initialState = {
    carsData: [],
    isChosen: false
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