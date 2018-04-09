import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import './CarSearch.css'

class CarSearch extends React.Component {

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <InputGroup>
                        <FormControl
                            onChange={this.props.handleChange}
                            type='text'
                        />
                        <input
                            type='range'
                            min='0'
                            max='500'
                        />
                    </InputGroup>
                </form>
            </div>
        )
    }
}

export default CarSearch