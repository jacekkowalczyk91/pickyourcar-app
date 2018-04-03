import React from 'react'
import {connect} from 'react-redux'
import {deleteCar} from "../../state/cars";

class Cars extends React.Component {

    render() {
        const carsData = this.props.carsData

        return (
            <div>
                {
                    carsData && carsData.map(
                        cars =>
                            <div key={cars.id}>
                                <p>Name: {cars.carName}</p>
                                <p>Capacity: {cars.carCapacity}</p>
                                <p>Max speed: {cars.carMaxSpeed}</p>
                                <p>Fuel consumption: {cars.carFuelConsumption}</p>
                                <button
                                    onClick={() => {
                                        this.props.deleteCar(cars.id)
                                    }}
                                >usun</button>
                            </div>
                    )
                }
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    deleteCar: id => dispatch(deleteCar(id))
})

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)