import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

class CarSearch extends React.Component {

    state = {
        inputValue: ''
    }

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
                            onChange={this.handleChange}
                            type='text'
                        />
                    </InputGroup>
                </form>
            </div>
        )
    }
}

export default CarSearch