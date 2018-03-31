import React from 'react'
import {connect} from 'react-redux'

class Cars extends React.Component {

    render() {
        const cars = this.props.carsData

        return (
            <div>
                {
                    cars &&
                    <React.Fragment>
                        <p key={cars.index}>{cars.carName}</p>
                    </React.Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps)(Cars)