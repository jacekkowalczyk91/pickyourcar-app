import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import './CarSearch.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import {connect} from 'react-redux'


class CarSearch extends React.Component {

    state = {
        value: {min: 0, max: 100}
    }

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    getMaxValue = () => {
        this.props.carsData.map(({carCapacity}) => carCapacity).reduce((max, next) => Math.max(max, next), 0)
    }

    render() {
        return (
            <div>
                {console.log(this.getMaxValue())}
                <form>
                    <InputGroup>
                        <FormControl
                            onChange={this.props.handleChange}
                            type='text'
                        />
                    </InputGroup>
                    <InputRange
                        minValue={0}
                        maxValue={this.getMaxValue()}
                        value={this.state.value}
                        onChange={value => this.setState({value})}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps)(CarSearch)