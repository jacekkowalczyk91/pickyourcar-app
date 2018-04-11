import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'

class SelectedCars extends React.Component {
    render() {
        const carsData = this.props.carsData

        return (
            <div>
                <Table striped
                       hover
                       condensed
                >
                    <thead>
                    <tr>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Capacity [l]</th>
                        <th>Max speed [km/h]</th>
                        <th>Fuel consumption [l/100km]</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        carsData && carsData.filter(
                            cars => cars.isChosen === true
                        ).map(
                            cars =>
                                <tr key={cars.id}>
                                    <td>{cars.carMark}</td>
                                    <td>{cars.carName}</td>
                                    <td>{cars.carCapacity}</td>
                                    <td>{cars.carMaxSpeed}</td>
                                    <td>{cars.carFuelConsumption}</td>
                                    <td><Button
                                        onClick={() => {
                                            this.props.toggleChosen(cars.id)
                                        }}
                                    >Unselect
                                    </Button></td>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps)(SelectedCars)