import React from 'react'
import {connect} from 'react-redux'
import {deleteCar} from "../../state/cars";
import './Cars.css'
import {Table, Button, Row, Col} from 'react-bootstrap'
import CarSearch from "./CarSearch";
import {toggleChosen} from '../../state/cars'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'



class Cars extends React.Component {

    state = {
        currentSearchPhrase: '',
        capacityValue: {
            min: 0,
            max: 500
        },
        fuelConsumptionValue: {
            min: 0,
            max: 20
        },
        maxSpeedValue: {
            min: 0,
            max: 300
        }
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {
        const carsData = this.props.carsData

        return (
            <div>
                <CarSearch
                    searchPhrase={this.state.currentSearchPhrase}
                    handleChange={this.handleSearchPhraseChange}
                />
                <Row>
                    <Col sm={4}>
                        <InputRange
                            minValue={0}
                            maxValue={500}
                            value={this.state.capacityValue}
                            onChange={capacityValue => this.setState({capacityValue})}
                        />
                    </Col>
                    <Col sm={4}>
                        <InputRange
                            minValue={0}
                            maxValue={20}
                            value={this.state.fuelConsumptionValue}
                            onChange={fuelConsumptionValue => this.setState({fuelConsumptionValue})}
                        />
                    </Col>
                    <Col sm={4}>
                        <InputRange
                            minValue={0}
                            maxValue={300}
                            value={this.state.maxSpeedValue}
                            onChange={maxSpeedValue => this.setState({maxSpeedValue})}
                        />
                    </Col>


                </Row>

                <Table striped
                       hover
                       condensed
                >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capacity [l]</th>
                        <th>Max speed [km/h]</th>
                        <th>Fuel consumption [l/100km]</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        carsData && carsData
                            .filter(cars => cars.carName.includes(this.state.currentSearchPhrase.toLowerCase()))
                            .filter(cars => cars.carCapacity > this.state.capacityValue.min && cars.carCapacity < this.state.capacityValue.max)
                            .filter(cars => cars.carFuelConsumption > this.state.fuelConsumptionValue.min && cars.carFuelConsumption < this.state.fuelConsumptionValue.max)
                            .filter(cars => cars.carMaxSpeed > this.state.maxSpeedValue.min && cars.carMaxSpeed < this.state.maxSpeedValue.max)
                            .map(
                                cars =>
                                    <tr key={cars.id}>
                                        <td>{cars.carName}</td>
                                        <td>{cars.carCapacity}</td>
                                        <td>{cars.carMaxSpeed}</td>
                                        <td>{cars.carFuelConsumption}</td>
                                        <td><Button
                                            onClick={() => {
                                                this.props.deleteCar(cars.id)
                                            }}
                                        >Usuń</Button></td>
                                        <td><Button
                                            onClick={() => {
                                                this.props.toggleChosen(cars.id)
                                            }}
                                        >
                                            {
                                                cars.isChosen ?
                                                    'unchosen' :
                                                    'chosen'
                                            }
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

const mapDispatchToProps = dispatch => ({
    deleteCar: id => dispatch(deleteCar(id)),
    toggleChosen: id => dispatch(toggleChosen(id))
})

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)