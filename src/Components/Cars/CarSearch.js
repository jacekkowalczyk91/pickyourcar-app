import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import './CarSearch.css'
import {connect} from 'react-redux'


class CarSearch extends React.Component {



    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <InputGroup>
                        <FormControl
                            onChange={this.props.handleChange}
                            type='text'
                        />
                    </InputGroup>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps)(CarSearch)