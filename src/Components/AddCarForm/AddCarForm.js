import React from 'react'
import {connect} from 'react-redux'
import {addCarTask} from "../../state/cars";

class AddCarForm extends React.Component {

    state = {
        carName: '',
        carCapacity: null,
        carFuelConsumption: null,
        carMaxSpeed: null
    }

    handleInputChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
            this.props.addCarTask(this.state)
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        name='carName'
                        value={this.state.carName}
                        placeholder='Car name...'
                        type='text'
                        onChange={this.handleInputChange}
                    />
                    <input
                        pattern="[0-9]{1,6}"
                        name='carCapacity'
                        type='text'
                        placeholder='car capacity...'
                        value={this.state.carCapacity}
                        onChange={this.handleInputChange}
                    />
                    <input
                        pattern="[0-9]{1,6}"
                        name='carFuelConsumption'
                        type='text'
                        placeholder='car fuel consumption...'
                        value={this.state.carFuelConsumption}
                        onChange={this.handleInputChange}
                    />
                    <input
                        pattern="[0-9]{1,6}"
                        name='carMaxSpeed'
                        type='text'
                        placeholder='car max speed...'
                        value={this.state.carMaxSpeed}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCarTask: car => dispatch(addCarTask(car))
})

export default connect(
    null,
    mapDispatchToProps)
(AddCarForm)