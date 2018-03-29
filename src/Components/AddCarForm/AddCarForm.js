import React from 'react'
import { connect } from 'react-redux'
import {addCarTask} from "../../state/cars";

class AddCarForm extends React.Component {

    state = {
        carName: '',
        carCapacity: 20
    }

    handleInputChange = event => this.setState({
        carName: event.target.value
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
                        value={this.state.carName}
                        placeholder='Car name...'
                        type='text'
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