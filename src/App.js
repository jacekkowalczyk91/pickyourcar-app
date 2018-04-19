import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cars from "./Components/Cars/Cars";
import AddCarForm from "./Components/AddCarForm/AddCarForm";
import Menu from "./Components/Menu/Menu";
import SelectedCars from "./Components/SelectedCars/SelectedCars";
import './App.css'


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Menu/>
                        <Route exact path="/addCar" component={AddCarForm}/>
                        <Route exact path="/" component={Cars}/>
                        <Route exact path='/selectedCars' component={SelectedCars}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
