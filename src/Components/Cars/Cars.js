import React from 'react'
import {connect} from 'react-redux'

class Cars extends React.Component {

    render() {
        const carsData = this.props.carsData

        return (
            <div>
                {
                    carsData && carsData.map(cars =>
                        <div key={cars.id}>
                            <p>{cars.carName}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carsData: state.cars.carsData
})

export default connect(mapStateToProps)(Cars)