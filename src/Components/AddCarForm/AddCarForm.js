import React from 'react'
import {connect} from 'react-redux'
import {addCarTask} from "../../state/cars";
import './AddCarForm.css'

class AddCarForm extends React.Component {

    state = {
        carMark: '',
        carName: '',
        carCapacity: '',
        carFuelConsumption: '',
        carMaxSpeed: '',
        isChosen: false
    }

    handleInputChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.carMark.length >= 1
            &&
            this.state.carName.length >= 1
            &&
            this.state.carCapacity.length >= 1
            &&
            this.state.carFuelConsumption.length >= 1
            &&
            this.state.carMaxSpeed.length >= 1)
        {
            this.props.addCarTask(this.state)
            alert('Dodano samochód')
        }
        else {
            alert('nieprawidłowe dane')
        }
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className='add-car-form'
                >
                    <input
                        pattern='^[a-zA-Z]+$'
                        name='carMark'
                        value={this.state.carMark}
                        placeholder='Car mark...'
                        type='text'
                        onChange={this.handleInputChange}
                    />
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
                        pattern="(?<=^| )\d+(\.\d+)?(?=$| )"
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
                        value='Add'
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCarTask: car => dispatch(addCarTask(car))
})

export default connect(null, mapDispatchToProps)(AddCarForm)