import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cars from "./Components/Cars/Cars";
import AddCarForm from "./Components/AddCarForm/AddCarForm";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={AddCarForm}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
