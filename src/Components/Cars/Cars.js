import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'
import {deleteCar} from "../../state/cars";
import './Cars.css'

class Cars extends React.Component {

    render() {
        const carsData = this.props.carsData

        return (
            <div>
                <Table striped bordered condensed hover highlight>
                    <thead>
                    <tr style={{
                        backgroundColor: '#76acdb'
                    }}>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Max speed</th>
                        <th>Fuel consumption</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        carsData && carsData.map(
                            cars =>
                                <tr key={cars.id}>
                                    <td>{cars.carName}</td>
                                    <td>{cars.carCapacity}</td>
                                    <td>{cars.carMaxSpeed}</td>
                                    <td>{cars.carFuelConsumption}</td>
                                    <Button
                                        onClick={() => {
                                            this.props.deleteCar(cars.id)
                                        }}
                                    >usun</Button>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
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